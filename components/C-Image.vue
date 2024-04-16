<template>
  <img :src="setImagemPokemon" :class="props.customize" :alt="props.description">
</template>

<script setup lang="ts">
import { pokemonDefaultImagem } from '@composables/defaultImage'

const props = defineProps({
  image: {
    type: String,
    required: true,
  },
  customize: {
    type: String,
    required: false,
    default: ''
  },
  description: {
    type: String,
    required: false,
    default: 'Imagem'
  }
})

const setImagemPokemon:ComputedRef<string> = computed(() => { return pokemonDefaultImagem(props.image) })

</script>