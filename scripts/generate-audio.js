import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import googleTTS from 'google-tts-api';
import removeMd from 'remove-markdown';
import axios from 'axios';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const contentDir = path.join(__dirname, '..', 'src', 'content', 'adrift-notes');
const audioDir = path.join(__dirname, '..', 'public', 'audio');

// Ensure audio dir exists
if (!fs.existsSync(audioDir)) {
  fs.mkdirSync(audioDir, { recursive: true });
}

async function generateAudio() {
  const force = process.argv.includes('--force');

  // Read all .md files
  const files = fs.readdirSync(contentDir).filter(f => f.endsWith('.md'));

  for (const file of files) {
    const slug = path.basename(file, '.md');
    const filePath = path.join(contentDir, file);
    const audioPath = path.join(audioDir, `${slug}.mp3`);

    if (fs.existsSync(audioPath) && !force) {
      console.log(`Audio already exists for ${slug}, skipping`);
      continue;
    }

    const content = fs.readFileSync(filePath, 'utf-8');

    // Remove frontmatter
    const parts = content.split('---');
    const body = parts.slice(2).join('---').trim();

    // Strip markdown
    const text = removeMd(body);

    // Generate audio URLs
    const urls = googleTTS.getAllAudioUrls(text, { lang: 'pt' });

    // Download and concatenate audio parts
    const buffers = [];
    for (const urlObj of urls) {
      const response = await axios.get(urlObj.url, { responseType: 'arraybuffer' });
      buffers.push(Buffer.from(response.data));
    }

    // Write concatenated buffer to file
    fs.writeFileSync(audioPath, Buffer.concat(buffers));
    console.log(`Generated audio for ${slug}`);
  }
}

generateAudio().catch(console.error);