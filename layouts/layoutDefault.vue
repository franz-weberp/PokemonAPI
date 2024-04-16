<template>
  <header class="w-full flex justify-center md:justify-start bg-white">
    <C-Link 
      :link="{ path: '/', rel: 'Something', target: '_self', title: 'Voltar para a home' }"
      tabindex="1"
    >
      <template #link>
        <img src="/logo-kotas.png" alt="Logo" class="w-[80px] h-[24px] my-[12px] md:ml-[16px] ">
      </template>
    </C-Link>
  </header>

  <main class="content flex flex-col items-center bg-[#f1f4f5]">
    <slot name="content"></slot>
  </main>
</template>

<script setup lang="ts">
import CLink from '@components/C-Link.vue'
</script>

<style scoped>

</style>