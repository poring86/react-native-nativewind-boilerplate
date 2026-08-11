// Minimal runtime Tailwind mapper for a small set of utility classes
// Purpose: provide immediate visual parity for the app's main screen
type Style = { [k: string]: any };

const map: Record<string, Style> = {
  'flex-1': { flex: 1 },
  'items-center': { alignItems: 'center' },
  'justify-center': { justifyContent: 'center' },
  'bg-green-500': { backgroundColor: '#22c55e' },
  'bg-purple-200': { backgroundColor: '#E9D5FF' },
  'p-6': { padding: 24 },
  'text-3xl': { fontSize: 24 },
  'font-extrabold': { fontWeight: '800' },
  'text-white': { color: '#ffffff' },
  'mt-2': { marginTop: 8 },
  'text-center': { textAlign: 'center' },
  'text-sm': { fontSize: 14 }
  ,
  'w-24': { width: 96 },
  'h-24': { height: 96 },
  'rounded-full': { borderRadius: 9999 },
  'text-xl': { fontSize: 20 },
  'flex-row': { flexDirection: 'row' },
  'mr-4': { marginRight: 16 },
  'ml-4': { marginLeft: 16 },
  'gap-4': { gap: 16 }
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
