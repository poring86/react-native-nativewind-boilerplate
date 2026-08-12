const Jimp = require('jimp-compact');
const fs = require('fs');
const path = require('path');
const files = fs.readdirSync('assets/images').filter(f => f.endsWith('.png'));
(async ()=>{
  for (const f of files) {
    const p = path.join('assets/images', f);
    try {
      const img = await Jimp.read(p);
      console.log(p, 'OK', img.bitmap.width + 'x' + img.bitmap.height);
    } catch (e) {
      console.error(p, 'ERROR', e.message);
    }
  }
})();
