const fs = require('fs');
const path = require('path');
const { PNG } = require('pngjs');

const dir = path.join(__dirname, '..', 'assets', 'images');
const backupDir = path.join(dir, 'backup');
if (!fs.existsSync(backupDir)) fs.mkdirSync(backupDir, { recursive: true });

const files = fs.readdirSync(dir).filter(f => f.toLowerCase().endsWith('.png'));

function truncateAfterIEND(buffer) {
  const iend = Buffer.from('IEND');
  const idx = buffer.lastIndexOf(iend);
  if (idx === -1) return null;
  const endPos = idx + 8; // 'IEND' (4) + CRC (4)
  if (endPos > buffer.length) return null;
  return buffer.slice(0, endPos);
}

async function reencode(file) {
  const p = path.join(dir, file);
  const bak = path.join(backupDir, file);
  const buf = fs.readFileSync(p);
  // backup original first
  try {
    fs.copyFileSync(p, bak);
  } catch (e) {}

  try {
    const png = PNG.sync.read(buf);
    const out = PNG.sync.write(png);
    fs.writeFileSync(p, out);
    console.log(`OK: ${file}`);
    return { ok: true };
  } catch (err) {
    console.warn(`WARN: ${file} initial decode failed -> ${err.message}`);
  }

  // try truncating after IEND and parse again
  const truncated = truncateAfterIEND(buf);
  if (truncated) {
    try {
      const png2 = PNG.sync.read(truncated);
      const out2 = PNG.sync.write(png2);
      fs.writeFileSync(p, out2);
      console.log(`FIXED (truncated): ${file}`);
      return { ok: true, fixed: true };
    } catch (err2) {
      console.error(`ERR: ${file} truncate attempt failed -> ${err2.message}`);
      return { ok: false, error: String(err2) };
    }
  }

  console.error(`ERR: ${file} could not be parsed or fixed`);
  return { ok: false, error: 'parse_failed' };
}

(async () => {
  const results = [];
  for (const f of files) {
    // skip backup folder files
    if (f.startsWith('backup')) continue;
    // eslint-disable-next-line no-await-in-loop
    const r = await reencode(f);
    results.push({ file: f, ...r });
  }
  console.log('--- Summary ---');
  console.log('Processed:', results.length);
  const ok = results.filter(r => r.ok);
  const bad = results.filter(r => !r.ok);
  console.log('Succeeded:', ok.length);
  if (ok.length) console.log(' -', ok.map(x => x.file).join(', '));
  console.log('Failed:', bad.length);
  if (bad.length) bad.forEach(b => console.log(' -', b.file, b.error || 'error'));
  console.log('Backup dir:', backupDir);
  process.exit(bad.length > 0 ? 2 : 0);
})();
