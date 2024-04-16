export interface AbilityEffectText {
  short_effect: string;
}

export interface Ability {
  name: string;
  pokemon_v2_abilityeffecttexts: AbilityEffectText[];
}

export interface Skill {
  pokemon_v2_ability: Ability;
}

export interface PokemonType {
  pokemon_v2_type: {
    name: string;
  };
}

export interface LoopPokemon {
  id: number;
  name: string;
  artworkUrl: string;
  types: PokemonType[];
}

export interface NestedResult {
  pokemon_id: number;
  sprites: {
    other: {
      ['official-artwork']: {
        front_default: string
      }
    }
  }
  pokemon_v2_pokemon: {
    name: string
    pokemon_v2_pokemontypes: PokemonType[]
    pokemon_v2_pokemonabilities: Skill[]
  }
}
