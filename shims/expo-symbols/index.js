const React = require('react');

function SymbolView(props) {
  // Render fallback if provided, otherwise render nothing
  if (props && props.fallback) return React.createElement(React.Fragment, null, props.fallback);
  return null;
}

module.exports = {
  SymbolView,
  default: SymbolView,
};
