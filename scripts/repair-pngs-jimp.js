const fs = require('fs');
const path = require('path');
const Jimp = require('jimp');

const dir = path.join(__dirname, '..', 'assets', 'images');
if (!fs.existsSync(dir)) {
  console.error('Images dir not found:', dir);
  process.exit(1);
}

const files = fs.readdirSync(dir).filter(f => f.toLowerCase().endsWith('.png'));
if (files.length === 0) {
  console.log('No PNGs found in', dir);
  process.exit(0);
}

const backupDir = path.join(dir, 'backup-jimp-' + Date.now());
fs.mkdirSync(backupDir, { recursive: true });

(async () => {
  const results = [];
  for (const file of files) {
    const p = path.join(dir, file);
    const bak = path.join(backupDir, file);
    try {
      fs.copyFileSync(p, bak);
    } catch (e) { }
    try {
      const img = await Jimp.read(p);
      // Ensure PNG output and default settings
      await img.getBufferAsync(Jimp.MIME_PNG).then(buf => fs.writeFileSync(p, buf));
      console.log('FIXED:', file);
      results.push({ file, ok: true });
    } catch (err) {
      console.error('FAILED:', file, err && err.message ? err.message : err);
      results.push({ file, ok: false, error: String(err) });
    }
  }
  console.log('\n--- Summary ---');
  console.log('Processed:', results.length);
  const ok = results.filter(r => r.ok).map(r => r.file);
  const bad = results.filter(r => !r.ok).map(r => ({ file: r.file, error: r.error }));
  console.log('Succeeded:', ok.length, ok.length ? (' - ' + ok.join(', ')) : '');
  console.log('Failed:', bad.length);
  if (bad.length) bad.forEach(b => console.log(' -', b.file, b.error));
  console.log('Backup dir:', backupDir);
  process.exit(bad.length > 0 ? 2 : 0);
})();
