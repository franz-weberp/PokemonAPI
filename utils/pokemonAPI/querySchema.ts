import type { ParamsSearch } from "@interfaces/paramsSearch"

export function whereTypeFilter(filters: ParamsSearch): string {
  let whereClause = ''
  if (filters.id) { whereClause = `{id: {_eq: ${filters.id}}}` }
  else if (filters.name) { whereClause = `{name: {_eq: "${filters.name}"}}` }
  return whereClause;
}

export function generateFilterString(filters: ParamsSearch) {
  return Object.entries(filters)
    .map(([key, value]) => {
      if (typeof value === 'string') { return `${key}: "${value}"` }
      else { return `${key}: ${value}` }
    })
    .join(', ')
}
  
export function queryPokemon(filters: ParamsSearch): string {
  const filterString = generateFilterString(filters)

  return `query returnPokemonList {
    pokemon_v2_pokemonsprites_aggregate(${filterString}, order_by: {pokemon_id: asc}) {
      nodes {
        pokemon_id
        sprites
        pokemon_v2_pokemon {
          name
          pokemon_v2_pokemontypes {
            pokemon_v2_type {
              name
            }
          }
        }
      }
    }
  }`
}

export function querySpecificPokemon(filters: ParamsSearch): string {
  const whereFilter = whereTypeFilter(filters)

  return `query {
    pokemon_v2_pokemon(where: ${whereFilter}) {
      id
      name
      pokemon_v2_pokemonsprites_aggregate {
        nodes {
          sprites
          pokemon_id
          pokemon_v2_pokemon {
            pokemon_v2_pokemontypes {
              pokemon_v2_type {
                name
              }
            }
            pokemon_v2_pokemonabilities {
              pokemon_v2_ability {
                name
                pokemon_v2_abilityeffecttexts {
                  short_effect
                }
              }
            }
          }
        }
      }
    }
  }`
}