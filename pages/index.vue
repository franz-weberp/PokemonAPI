<template>
  <NuxtLayout name="layout-default">
    <template #content>
      <section class="lg:w-[854px] p-[16px]">
        <C-SearchBar tabindex="2"/>
        <C-Title :title="'Pokémons'" :class="'mt-[48px] mb-[24px] font-bold text-[14px]'"/>

        <div class="grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 gap-[16px]">
          <C-Link 
            v-for="(pokemon, index) in data?.pages?.flat()" :key="index"
            :link="{ path: '/pokemon/' + pokemon.id, rel: `Pokémon ${pokemon.name}`, target: '_self', title: `Pokemon ${pokemon.name}` }"
            class="flex flex-col items-center w-[152px] h-[190px] px-[10px] pt-[10px] pb-[16px] rounded-[8px] bg-white"
          >
            <template #link>
              <C-Image :image="pokemon.artworkUrl" :customize="'size-[40px]'" :alt="'Image'" />

              <C-Paragraph :class="'mt-[16px] text-center font-bold text-[14px] capitalize'" :paragraph="pokemon.name" />
              <C-Paragraph :class="'font-quicksand font-bold text-[12px] mt-[8px]'" :paragraph="`Cód:${pokemon.id}`" />

              <div class="types flex flex-row items-end mt-auto">
                <C-Type 
                  v-for="typePokemon in pokemon.types" :key="pokemon.id"
                  :typePokemon="typePokemon"
                  class="w-[64px] h-[16px] rounded-2xl text-[8px] text-white mr-1"
                />
              </div>
            </template>
  
          </C-Link>
        </div>
        <span ref="loadMoreAnchor" class="loading">
        </span>
      </section>
    </template>
  </NuxtLayout>>
</template>

<script setup lang="ts">
import CSearchBar from '@components/C-SearchBar.vue'
import CTitle from '@components/C-Title.vue'

import CImage from '@components/C-Image.vue'
import CLink from '@components/C-Link.vue'
import CType from '@components/C-Type.vue'
import CParagraph from '@components/C-Paragraph.vue'

import { chacheForMinutes }  from '@composables/timeCache'
import { useInfiniteQuery } from '@tanstack/vue-query'
import { searchForPokemon } from '@utils/pokemonAPI/apiService'
import { useMainStore } from '@store'

const store = useMainStore()
let searchParams = ref({ limit: 24, offset: 0 })

import type { PokemonType, LoopPokemon, NestedResult } from "@interfaces/resultUseQuery"

const loadMoreAnchor = ref(null)
let observer: IntersectionObserver

onMounted(async () => {
  await performSearch()

  observer = new IntersectionObserver(
    entries => {
      if (entries[0].isIntersecting) { loadMore() }
    },
    { threshold: 1 }
  )

  if (loadMoreAnchor.value !== null) { observer.observe(loadMoreAnchor.value) }
})

const performSearch = async () => {
  searchParams.value.offset = store.page * searchParams.value.limit
  const rawData = await searchForPokemon(searchParams.value)

  const data = rawData.pokemon_v2_pokemonsprites_aggregate.nodes.map((node: NestedResult) => {
    return {
      id: node.pokemon_id || 0,
      artworkUrl: node.sprites.other['official-artwork'].front_default || '/pokemon.png',
      name: node.pokemon_v2_pokemon.name || 'pokemon',
      types: node.pokemon_v2_pokemon.pokemon_v2_pokemontypes.map((type: PokemonType) => type.pokemon_v2_type.name) || ['none']
    }
  })

  return data
}

const { data, fetchNextPage, hasNextPage, isLoading } = useInfiniteQuery<LoopPokemon[]>({
  queryKey: ['listPokemon'],
  queryFn: performSearch,
  getNextPageParam: (lastPage, pages) => pages.length,
  staleTime: chacheForMinutes(),
  gcTime: chacheForMinutes(),
  placeholderData: (previousData, previousQuery) => previousData,
  initialPageParam: 1
})

const loadMore = async () => {
  store.incrementPage()
  if (hasNextPage) await fetchNextPage()
}

onUnmounted(() => {
  if (observer) { observer.disconnect() }
})
</script>