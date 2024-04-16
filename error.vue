<template>
  <NuxtLayout name="layout-default">
    <template #content>
      <section class="flex flex-col text-center lg:w-[854px] p-[16px] h-screen">
        <C-Error v-if="error" :statusCode="error.statusCode" :message="error.message" />
      </section>
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'

import CError from '@components/C-Error.vue'

const props = defineProps({
  error: Object as () => NuxtError
})
</script>