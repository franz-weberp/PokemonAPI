export const pokemonTypeColors: { [key: string]: String }  = {
  'grass': '#08fec3',
  'poison': '#af08fe',
  'water': '#00a3ff',
  'fire': '#fe0808',
  'eletric': '#ffb800',
  'ground': '#85826e',
  'fairy': '#fba1ec',
  'normal': '#c4c4c4',
  'flying': '#5317fc',
  'default': '#0e0e0e',
}

export function getColor(type: string): String {
  return pokemonTypeColors[type] || 'text-gray-500';
}