<template name="description">
  <p class="py-[12px] px-[16px] border-t border-custom-gray text-[12px] text-[#616161]">
    {{ props.description }}
  </p>
</template>

<script setup lang="ts">
const props = defineProps({
  description: {
    type: String,
    required: true,
    default: 'Default description'
  },
})
</script>