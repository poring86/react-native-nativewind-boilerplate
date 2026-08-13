const { withAppBuildGradle } = require('@expo/config-plugins');

function addPackagingOptions(contents) {
  if (contents.includes('OSGI-INF/MANIFEST.MF')) return contents;

  const regex = /android\s*\{([\s\S]*?)\n\}/m;
  if (regex.test(contents)) {
    return contents.replace(regex, (match, inner) => {
      if (inner.includes('packagingOptions')) return match;
      const insertion = `${inner}\n    packagingOptions {\n        resources {\n            excludes += [\"META-INF/versions/9/OSGI-INF/MANIFEST.MF\"]\n        }\n    }`;
      return `android {${insertion}\n}`;
    });
  }

  return contents + `\n\nandroid {\n    packagingOptions {\n        resources {\n            excludes += [\"META-INF/versions/9/OSGI-INF/MANIFEST.MF\"]\n        }\n    }\n}\n`;
}

module.exports = function withPackagingOptions(config) {
  return withAppBuildGradle(config, (config) => {
    config.modResults.contents = addPackagingOptions(config.modResults.contents);
    return config;
  });
};
