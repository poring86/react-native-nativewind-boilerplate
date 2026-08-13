const { withAppBuildGradle, withGradleProperties } = require('@expo/config-plugins');

function addPackagingProperty(modResults) {
  const key = 'android.packagingOptions.excludes';
  const value = 'META-INF/versions/9/OSGI-INF/MANIFEST.MF';

  const exists = modResults.find(
    (p) => p.type === 'property' && p.key === key && p.value && p.value.includes(value)
  );
  if (!exists) {
    modResults.push({ type: 'property', key, value });
  }
  return modResults;
}

module.exports = function withPackagingOptions(config) {
  config = withAppBuildGradle(config, (config) => {
    // noop: keep for compatibility if needed later
    return config;
  });

  return withGradleProperties(config, (config) => {
    config.modResults = addPackagingProperty(config.modResults);
    return config;
  });
};
