<script setup lang="ts">
const props = defineProps<{
  details: { logo: string; colorLogo: string; colorBg: string };
}>();
</script>

<template>
  <div
    :style="`color: ${details.colorLogo}; background-color: ${details.colorBg}`"
    v-html="details.logo"
    :class="details.logo"
    class="d-flex align-items-center justify-content-center logo-block main-white"
  ></div>
</template>
