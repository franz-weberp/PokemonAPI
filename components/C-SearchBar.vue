<template>
  <div class="relative block w-full">
    <input type="text" v-model="searchPokemonValue" :class="props.class" :placeholder="props.placeholder">
    <C-SvgRender 
      :width="16"
      :height="16"
      :colorMode="'rgba(97, 97, 97, 1)'"
      :iconViewBox="iconMagnifying.iconViewBox" 
      :iconPath="iconMagnifying.iconPath"
      class="block md:hidden cursor-pointer absolute top-1/2 left-[16px] transform -translate-y-1/2"
    />
    <C-SvgRender 
      :width="16"
      :height="16"
      :colorMode="'rgba(97, 97, 97, 0.7)'"
      :iconViewBox="iconXmark.iconViewBox" 
      :iconPath="iconXmark.iconPath"
      class="hidden md:block cursor-pointer absolute top-1/2 right-[16px] transform -translate-y-1/2"
      @click="cleanSearchBar"
    />
  </div>
</template>

<script setup lang="ts">
import CSvgRender from '@components/C-SvgRender.vue'
import { magnifying as iconMagnifying } from '~/assets/svgs/magnifying'
import { xmark as iconXmark } from '~/assets/svgs/xmark'

const props = defineProps({
  class: {
    type: String,
    required: false,
    default: 'w-full h-[48px] my-[16px] p-[14px] pl-[36px] rounded-[32px] color-light font-normal text-[14px]'
  },
  placeholder: {
    type: String,
    required: false,
    default: 'Pesquise por nome ou código'
  },
})

import { useDebounce } from '@composables/useDebounce'
import { lowInStringCase } from '@composables/lowInStringCase'

const router = useRouter()
const { debounce, clearExistingTimeout } = useDebounce()

const searchPokemonValue = ref('')

const handleSearch = (pokemonValueSearch: string | number) => {
  const valueToSearch = lowInStringCase(pokemonValueSearch)
  debounce(() => { router.push(`/pokemon/${valueToSearch}`) })
}

watch(searchPokemonValue, () => {
  if (searchPokemonValue.value.trim() !== '') {
    handleSearch(searchPokemonValue.value)
  }
})

const cleanSearchBar = () => {
  searchPokemonValue.value = ''
  clearExistingTimeout()
}
</script>