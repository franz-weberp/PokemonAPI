import { pokemonTypeColors } from './utils/types/type'

module.exports = {
  theme: {
    extend: {
      colors: {
        ...pokemonTypeColors,
        'custom-gray': '#f1f4f5',
      }
    }
  }
}