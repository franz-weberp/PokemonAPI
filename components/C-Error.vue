<template>
  <C-Title v-if="props.statusCode === 404" :title="messageError404" :class="'font-bold text-4xl'"/>
  <C-Title v-else-if="props.statusCode === 500" :title="messageErrorPokemonNotFound" :class="'font-bold text-4xl'"/>
  <C-Title v-else :title="messageErrorUnknown" :class="'font-bold text-4xl'"/>

  <!-- <C-Paragraph :class="'mt-[16px]'" :paragraph="messageSearchForPokemon"/> -->
  <C-Paragraph :class="'mt-[16px]'" :paragraph="messageSearchForPokemon"/>

  <C-SearchBar/>

  <C-Link :link="{ path: '/', rel: `${seoDescriptionTitleButton}`, target: '_self', title: `${seoDescriptionTitleButton}` }" @click="handleClearError">
    <template #link>
      <C-Paragraph :class="'link font-bold'" :paragraph="messageErrorGoBackToHome"/>
    </template>
  </C-Link>
</template>

<script setup lang="ts">
import CSearchBar from '@components/C-SearchBar.vue'
import CTitle from '@components/C-Title.vue'
import CParagraph from '@components/C-Paragraph.vue'
import CLink from '@components/C-Link.vue'


import {
  errorGoBackToHome as messageErrorGoBackToHome,
  error404 as messageError404,
  errorUnknown as messageErrorUnknown,
  errorPokemonNotFound as messageErrorPokemonNotFound,
} from '@utils/messages/errors'

import {
  searchForPokemon as messageSearchForPokemon,
  seoDescriptionTitleGoBackHomeButton as seoDescriptionTitleButton
} from '@utils/messages/messages'

const props = defineProps({
  statusCode: {
    type: Number,
    required: true
  },
  message: {
    type: String,
    required: false
  }
})

const handleClearError = () => { clearError({ redirect: '/' }) }
</script>