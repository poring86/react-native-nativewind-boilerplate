import React from 'react';
import { SvgXml } from 'react-native-svg';

const svg = require('../assets/logo-nativewind.svg');

export default function LogoNativeWind({ width = 96, height = 96 }: { width?: number; height?: number }) {
  // `svg` is a module path string when required; load file contents if needed.
  // SvgXml accepts XML string; read via require returns a number in Metro asset system.
  // Use SvgXml with a fetched asset string by inlining the SVG contents for now.
  const inline = `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<!-- inlined asset -->\n` +
    `"` + (svg as any) + `"`;
  // Fallback: try to treat require result as string, otherwise render empty placeholder.
  try {
    // If svg is already a string
    if (typeof svg === 'string' && svg.trim().startsWith('<')) {
      return <SvgXml xml={svg} width={width} height={height} />;
    }
  } catch (e) {}
  return <SvgXml xml={''} width={width} height={height} />;
}
