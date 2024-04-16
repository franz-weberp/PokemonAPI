<template>
  <NuxtLayout name="layout-default">
    <template #content>
      <section v-if="pokemonFounded" class="h-screen flex flex-col items-center lg:w-[541px] pt-[32px]">
        <article class="w-full flex flex-col items-center rounded-[8px] p-[12px] text-center bg-white">

          <C-Image :image="data?.artworkUrl" :customize="'flex items-center justify-center size-[120px]'" :alt="'Image'" />
          <C-Title :title="data?.name" :class="'mt-[12px] mb-[24px] font-bold text-[14px] capitalize'"/>

          <div class="types flex flex-row">
            <C-Type 
              v-for="(typePokemon, index) in data?.types" :key="index"
              :typePokemon="typePokemon.pokemon_v2_type.name" 
              class="w-[64px] h-[16px] rounded-2xl text-[8px] text-white mr-1"
              :class="pokemonTypeColor(typePokemon)"
            />
          </div>

        </article>

        <article class="w-full m-[24px] rounded-[8px] pt-[20px] px-2 bg-white">
          <C-Title :title="messageSkills" :class="'text-center mb-[8px] font-bold text-[14px]'"/>
          <C-SkillDescription 
            v-for="(skill, index) in data?.skills" :key="index"
            :description="`${skill.name} - ${skill.short_effect}`"
            class="py-[12px] px-[16px] border-t border-custom-gray text-[12px] text-[#616161]"
          />
        </article>

        <NuxtLink to="/" class="w-full m-[24px] p-[12px] text-center font-bold text-[14px] link" tabindex="2">{{ messageGoBack }}</NuxtLink>
      </section>

      <section v-else class="flex flex-col text-center lg:w-[854px] p-[16px] h-screen">
        <section>
          <C-Error :statusCode="500" :message="messageSearchForPokemon" />
        </section>
      </section>
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">

import CImage from '@components/C-Image.vue'
import CTitle from '@components/C-Title.vue'
import CError from '@components/C-Error.vue'
import CType from '@components/C-Type.vue'
import CSkillDescription  from '@components/C-SkillDescription.vue'

import { chacheForMinutes }  from '@composables/timeCache'
import { pokemonTypeColor }  from '@composables/typeColor'
import {
  skills as messageSkills,
  goBack as messageGoBack,
  searchForPokemon as messageSearchForPokemon,
} from '@utils/messages/messages'
import { errorPokemonNotFound as messageErrorPokemonNotFound } from '@utils/messages/errors'

const route = useRoute()

const id = Array.isArray(route.params.id) ? route.params.id[0] : route.params.id;
const filters = (/^\d+$/.test(id))
  ? { id: Number(id) } : { name: id.toLowerCase() }

import { useQuery } from '@tanstack/vue-query'
import { searchForSpecificPokemon } from '@utils/pokemonAPI/apiService'

import type { Skill } from "@interfaces/resultUseQuery"

const pokemonFounded = ref(true)

const fetcherPokemon = async () => {
  try {
    const rawData = await searchForSpecificPokemon(filters)
    if (rawData.pokemon_v2_pokemon.length === 0) { pokemonFounded.value = false }

    const pokemon = rawData.pokemon_v2_pokemon[0] || ['none'];
    const spriteNode = pokemon.pokemon_v2_pokemonsprites_aggregate.nodes[0] || ['none'];

    const data = {
      id: pokemon.id || 0,
      name: pokemon.name || 'pokemon',
      artworkUrl: spriteNode.sprites.other['official-artwork'].front_default || '/pokemon.png',
      types: spriteNode.pokemon_v2_pokemon.pokemon_v2_pokemontypes || ['none'],
      skills: spriteNode.pokemon_v2_pokemon.pokemon_v2_pokemonabilities.map((skill:Skill) => ({
        name: skill.pokemon_v2_ability.name || 'empty',
        short_effect: skill.pokemon_v2_ability.pokemon_v2_abilityeffecttexts[1]?.short_effect || 'A habilidade nao possui descricao'
      })) || ['none'],
    }

    return data

  } catch (error) {
    throw createError({ statusCode: 500, message: messageErrorPokemonNotFound, fatal: true })
  }
}

const { data } = useQuery({
  queryKey: ['individualPokemon', route.params.id],
  queryFn: fetcherPokemon,
  staleTime: chacheForMinutes(),
  gcTime: chacheForMinutes(),
  placeholderData: (previousData, previousQuery) => previousData
})

</script>