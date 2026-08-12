const fs = require('fs');
const path = require('path');
const { PNG } = require('pngjs');

const dir = path.join(__dirname, '..', 'assets', 'images');
const files = fs.readdirSync(dir).filter(f => f.toLowerCase().endsWith('.png'));

if (files.length === 0) {
  console.log('No PNG files found in', dir);
  process.exit(0);
}

for (const file of files) {
  const full = path.join(dir, file);
  const bak = full + '.bak';
  try {
    console.log('Processing', file);
    const data = fs.readFileSync(full);
    // parse
    const img = PNG.sync.read(data);
    // write back
    const out = PNG.sync.write(img, { colorType: img.colorType, inputColorType: img.colorType });
    // backup original
    if (!fs.existsSync(bak)) fs.copyFileSync(full, bak);
    fs.writeFileSync(full, out);
    console.log('Re-encoded', file);
  } catch (err) {
    console.error('Failed to process', file, err && err.message);
  }
}
console.log('Done');
