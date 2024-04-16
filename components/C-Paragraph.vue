<template>
  <p :class="props.class">{{ props.paragraph }}</p>
</template>

<script setup lang="ts">
const props = defineProps({
  paragraph: {
    type: String,
    required: true,
    default: 'Paragraph default'
  },
  class: {
    type: String,
    required: true,
    default: ''
  }
})
</script>