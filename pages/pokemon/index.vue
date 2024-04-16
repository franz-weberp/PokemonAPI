<template>
  <NuxtLayout name="layout-default">
    <template #content>
      <section class="h-screen lg:w-[854px] p-[16px] text-center">
        <C-Title :title="messageSearchPokemon" :class="'my-[16px] font-bold text-[16px]'"/>

        <C-SearchBar tabindex="2"/>

        <C-Link :link="{ path: '/', rel: `${seoDescriptionTitleButton}`, target: '_self', title: `${seoDescriptionTitleButton}` }" @click="handleClearError" tabindex="3">
          <template #link>
            <C-Paragraph :class="'link'" :paragraph="messageErrorGoBackToHome"/>
          </template>
        </C-Link>

      </section>
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
import CSearchBar from '@components/C-SearchBar.vue'
import CTitle from '@components/C-Title.vue'
import CLink from '@components/C-Link.vue'
import CParagraph from '@components/C-Paragraph.vue'

import { errorGoBackToHome as messageErrorGoBackToHome } from '@utils/messages/errors'

import {
  searchForPokemon as messageSearchPokemon,
  seoDescriptionTitleGoBackHomeButton as seoDescriptionTitleButton
} from '@utils/messages/messages'

const handleClearError = () => { clearError({ redirect: '/' }) }
</script>