<template>
  <Nuxt-Link :to="props.link.path" :rel="props.link.rel" :target="props.link.target" :title="props.link.title">
    <slot name="link"></slot>
  </Nuxt-Link>
</template>

<script setup lang="ts">

const props = defineProps({ 
  link: {
    type: Object,
    required: true,
    default: () => ({ path: '', rel: '', target: '' })
  }
})
</script>