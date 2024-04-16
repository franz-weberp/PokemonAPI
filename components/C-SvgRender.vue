<template>
  <svg
    xmlns="http://www.w3.org/2000/svg" 
    :viewBox="props.iconViewBox"
    :fill="props.colorMode"
    :width="props.width" 
    :height="props.height"
    class="svg"
  >
    <path :d="props.iconPath" />
  </svg>
</template>

<script setup lang="ts">
const props = defineProps({ 
  iconViewBox: String, 
  iconPath: String,
  colorMode: String,
  width: Number, 
  height: Number,
});
</script>