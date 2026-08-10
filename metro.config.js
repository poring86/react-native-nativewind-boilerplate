const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');
const path = require('path');

let config = getDefaultConfig(__dirname)

// Ensure JSX runtime aliases point to react-native-css-interop so NativeWind's
// runtime handles `className`/style conversion consistently in Metro.
const extraNodeModules = {
  'react/jsx-runtime': path.resolve(__dirname, 'node_modules/react-native-css-interop/jsx-runtime'),
  'react/jsx-dev-runtime': path.resolve(__dirname, 'node_modules/react-native-css-interop/jsx-runtime'),
};

config.resolver = config.resolver || {};
config.resolver.extraNodeModules = Object.assign({}, config.resolver.extraNodeModules || {}, extraNodeModules);

// Apply NativeWind Metro plugin so Tailwind classes are compiled and injected
// into the runtime (StyleSheet.registerCompiled). This enables `className` →
// native styles conversion at runtime.
module.exports = withNativeWind(config, {
  // Provide the tailwind entry so the nativewind tailwind CLI can resolve
  // the `@tailwind` directives and content correctly.
  input: path.resolve(__dirname, 'global.css'),
});