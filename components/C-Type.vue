<template>
  <div class="flex justify-center items-center w-[64px] h-[16px] rounded-2xl color" :class="customClassCss">
    <p class="uppercase text-[8px] text-white">{{ props.typePokemon }}</p>
  </div>
</template>

<script setup lang="ts">
import { pokemonTypeColor } from '@composables/typeColor'

const props = defineProps({
  typePokemon: {
    type: String,
    required: true,
    default: 'default'
  },
  class: {
    type: String,
    required: false,
    default: ''
  },
})

const customClassCss:ComputedRef<string[]> = computed(() => [
  pokemonTypeColor(props.typePokemon),
  props.class 
])
</script>