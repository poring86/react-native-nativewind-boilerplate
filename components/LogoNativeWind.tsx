import React from 'react';
import { SvgXml } from 'react-native-svg';

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
  <defs>
    <style>
      .atom { fill: none; stroke: #61dafb; stroke-width:8; stroke-linecap:round; }
      .swirl { fill: none; stroke: #7c3aed; stroke-width:6; stroke-linecap:round; stroke-linejoin:round; }
    </style>
  </defs>
  <g transform="translate(100,100)">
    <ellipse class="atom" rx="58" ry="22" transform="rotate(0)" />
    <ellipse class="atom" rx="58" ry="22" transform="rotate(60)" />
    <ellipse class="atom" rx="58" ry="22" transform="rotate(120)" />
    <circle cx="0" cy="0" r="18" fill="transparent" />
    <path class="swirl" d="M -10 2 C -6 -4, 6 -6, 12 -2 C 6 0, 0 6, -8 8" />
  </g>
</svg>
`;

export default function LogoNativeWind({ width = 96, height = 96 }: { width?: number; height?: number }) {
  return <SvgXml xml={svg} width={width} height={height} />;
}
