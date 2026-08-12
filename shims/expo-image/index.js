const React = require('react');
const { Image } = require('react-native');

function ExpoImage(props) {
  return React.createElement(Image, props);
}

// Preserve some common static methods
ExpoImage.getSize = Image.getSize?.bind(Image);
ExpoImage.prefetch = Image.prefetch?.bind(Image);

module.exports = ExpoImage;
module.exports.default = ExpoImage;
module.exports.Image = Image;
