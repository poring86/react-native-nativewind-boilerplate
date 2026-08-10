// Minimal runtime Tailwind mapper for a small set of utility classes
// Purpose: provide immediate visual parity for the app's main screen
type Style = { [k: string]: any };

const map: Record<string, Style> = {
  'flex-1': { flex: 1 },
  'items-center': { alignItems: 'center' },
  'justify-center': { justifyContent: 'center' },
  'bg-green-500': { backgroundColor: '#22c55e' },
  'p-6': { padding: 24 },
  'text-3xl': { fontSize: 24 },
  'font-extrabold': { fontWeight: '800' },
  'text-white': { color: '#ffffff' },
  'mt-2': { marginTop: 8 },
  'text-center': { textAlign: 'center' },
  'text-sm': { fontSize: 14 }
};

export function tw(classes?: string) {
  if (!classes) return {};
  return classes
    .split(/\s+/)
    .filter(Boolean)
    .map((c) => map[c] ?? {})
    .reduce((acc, cur) => Object.assign(acc, cur), {} as Style);
}

export default tw;
