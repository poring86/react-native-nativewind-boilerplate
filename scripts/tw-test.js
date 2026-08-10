const { tailwindCli } = require('nativewind/dist/metro/tailwind');
const cli = tailwindCli(console.debug);
cli.getCSSForPlatform({ platform: 'android', input: undefined })
  .then((css) => {
    console.log('css-length', css.length);
  })
  .catch((e) => {
    console.error(e.stack || e.message);
    process.exit(1);
  });
