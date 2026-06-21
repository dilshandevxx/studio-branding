import { copyFileSync, mkdirSync, existsSync } from 'fs';
import { join } from 'path';

const src = String.raw`C:\Users\dilsh\.gemini\antigravity-ide\brain\c7baf0b9-9d5c-4a47-91f0-facbb4709b0b\howhow_illustration_1781927460517.png`;
const destDir = join(process.cwd(), 'public', 'images');
const dest = join(destDir, 'howhow_illustration.png');

if (!existsSync(destDir)) {
  mkdirSync(destDir, { recursive: true });
}

try {
  copyFileSync(src, dest);
  console.log('✅ Image copied successfully to:', dest);
} catch (err) {
  console.error('❌ Error copying image:', err.message);
}
