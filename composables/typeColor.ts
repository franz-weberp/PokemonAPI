export const pokemonTypeColor = ((typePokemon:string) : string => {
  const type = typePokemon || 'default'
  return `bg-${type}`
})