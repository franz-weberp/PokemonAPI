<template>
  <h1 :class="props.class">{{ props.title }}</h1>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
    default: 'Title Default'
  },
  class: {
    type: String,
    required: true,
    default: ''
  }
})
</script>