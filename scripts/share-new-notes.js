import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { Relay, finalizeEvent, generateSecretKey, getPublicKey, nip19 } from 'nostr-tools';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function shareToNostr(filePath) {
  // Read and parse the markdown file
  const content = fs.readFileSync(filePath, 'utf-8');

  // Extract frontmatter
  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
  if (!frontmatterMatch) {
    console.error('No frontmatter found in', filePath);
    return;
  }

  const frontmatter = frontmatterMatch[1];
  const titleMatch = frontmatter.match(/title:\s*"([^"]+)"/) || frontmatter.match(/title:\s*(.+)/);
  const descriptionMatch = frontmatter.match(/description:\s*"([^"]+)"/) || frontmatter.match(/description:\s*(.+)/);
  const slugMatch = frontmatter.match(/slug:\s*(.+)/);

  if (!titleMatch || !descriptionMatch) {
    console.error('Missing title or description in frontmatter');
    return;
  }

  const title = titleMatch[1].trim();
  const description = descriptionMatch[1].trim();
  const slug = slugMatch ? slugMatch[1].trim() : path.basename(filePath, '.md');

  // Construct URL
  const url = `https://victorhugo.info/adrift-notes/${slug}`;

  // Create the message
  const message = `New Adrift Note: ${title}\n\n${description}\n\nRead more: ${url}`;

  console.log('Message to post:', message);

  let signedEvent;

  if (dryRun) {
    // For dry run, create a mock event
    signedEvent = {
      kind: 1,
      created_at: Math.floor(Date.now() / 1000),
      tags: [],
      content: message,
      pubkey: 'mock-pubkey',
      id: 'mock-id',
      sig: 'mock-signature'
    };
  } else {
    // Get private key from environment
    const nsec = process.env.NOSTR_PRIVATE_KEY;
    if (!nsec) {
      console.error('NOSTR_PRIVATE_KEY not set');
      return;
    }

    // Decode nsec to private key
    const decoded = nip19.decode(nsec);
    if (decoded.type !== 'nsec') {
      console.error('Invalid Nostr private key format');
      return;
    }
    const privateKey = decoded.data;

    // Create event
    const event = {
      kind: 1,
      created_at: Math.floor(Date.now() / 1000),
      tags: [],
      content: message,
      pubkey: getPublicKey(privateKey),
    };

    signedEvent = finalizeEvent(event, privateKey);
  }

  console.log('Event to publish:', JSON.stringify(signedEvent, null, 2));

  if (dryRun) {
    console.log('DRY RUN: Not publishing to relays');
    return;
  }

  // List of relays to publish to
  const relays = [
    'wss://relay.damus.io',
    'wss://relay.snort.social',
    'wss://nos.lol',
    'wss://relay.current.fyi',
  ];

  // Publish to relays
  for (const relayUrl of relays) {
    try {
      const relay = await Relay.connect(relayUrl);
      await relay.publish(signedEvent);
      console.log(`Published to ${relayUrl}`);
      relay.close();
    } catch (error) {
      console.error(`Failed to publish to ${relayUrl}:`, error);
    }
  }

  console.log('Sharing complete!');
}

// Main execution
let filePath;
let dryRun = false;

if (process.argv[2] === '--dry-run') {
  dryRun = true;
  filePath = process.argv[3];
} else {
  filePath = process.argv[2];
}

if (!filePath) {
  console.error('Usage: node scripts/share-new-notes.js [--dry-run] <file-path>');
  console.error('  --dry-run: Show what would be posted without actually publishing');
  process.exit(1);
}

shareToNostr(filePath).catch(console.error);