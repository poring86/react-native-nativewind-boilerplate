const { execSync } = require('child_process');
const fs = require('fs');

const id = process.argv[2];
const outPath = process.argv[3] || 'eas-builds/app.apk';
if (!id) {
  console.error('Usage: node scripts/eas-monitor.js <build-id> [out-path]');
  process.exit(2);
}
fs.mkdirSync(require('path').dirname(outPath), { recursive: true });

async function poll() {
  while (true) {
    try {
      const raw = execSync('eas build:list --platform android --limit 20 --json', { encoding: 'utf8' });
      const arr = JSON.parse(raw || '[]');
      const b = arr.find(x => x.id === id);
      if (!b) {
        console.log('[monitor] build not found yet, retrying...');
        await new Promise(r => setTimeout(r, 15000));
        continue;
      }
      console.log('[monitor] status:', b.status);
      const artifacts = b.artifacts || b.artifacts;
      const url = (artifacts && (artifacts.buildUrl || artifacts.url)) || (Array.isArray(artifacts) && artifacts[0] && artifacts[0].url) || null;
      if (url) {
        console.log('[monitor] artifact available:', url);
        const res = await fetch(url);
        if (!res.ok) throw new Error('Failed to download artifact: ' + res.status);
        const stream = fs.createWriteStream(outPath);
        await new Promise((resolve, reject) => {
          res.body.pipe(stream);
          res.body.on('error', reject);
          stream.on('finish', resolve);
        });
        console.log('[monitor] downloaded to', outPath);
        process.exit(0);
      }
      if (['errored', 'canceled', 'failed'].includes(b.status)) {
        console.error('[monitor] build finished with status', b.status);
        process.exit(1);
      }
    } catch (e) {
      console.error('[monitor] error:', e && e.message ? e.message : e);
    }
    await new Promise(r => setTimeout(r, 15000));
  }
}

poll();
