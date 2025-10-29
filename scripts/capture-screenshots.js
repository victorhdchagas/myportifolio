import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function captureScreenshot(url, outputPath, options = {}) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Set viewport size
  await page.setViewport({ width: 1280, height: 720 });

  try {
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });

    // Wait a bit for dynamic content
    await new Promise(resolve => setTimeout(resolve, 2000));

    await page.screenshot({
      path: outputPath,
      fullPage: false,
      ...options
    });

    console.log(`Screenshot captured: ${outputPath}`);
  } catch (error) {
    console.error(`Failed to capture screenshot for ${url}:`, error.message);
  } finally {
    await browser.close();
  }
}

async function main() {
  const publicDir = path.join(__dirname, '..', 'public');

  // Ensure directories exist
  const crmDir = path.join(publicDir, 'crm-consignado');
  if (!fs.existsSync(crmDir)) {
    fs.mkdirSync(crmDir, { recursive: true });
  }

  // Capture CRM Consignado GitHub repo screenshot
  await captureScreenshot(
    'https://github.com/victorhdchagas',
    path.join(crmDir, 'screenshot1.png'),
    { clip: { x: 0, y: 0, width: 1280, height: 720 } }
  );

  console.log('Screenshot capture completed');
}

main().catch(console.error);