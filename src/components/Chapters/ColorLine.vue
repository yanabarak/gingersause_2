<script setup lang="ts">
import { ref, computed } from 'vue';
import ColorBlock from '../GridBlocks/ColorBlock.vue';

const colors = [
  '#A2224C',
  '#FFFFFF',
  '#101820',
  '#EFF3EF',
  '#F2F6D0',
  '#FD9415',
  '#D0E1D4',
  '#F2F6D0',
];

const blockStyle = computed(() => {
  const n = colors.length;
  return {
    maxWidth: `calc((100% - (${n - 1} * 15px) - 7px) / ${n})`,
  };
});
</script>

<template>
  <div class="d-flex gap-3 colors-line">
    <ColorBlock v-for="(color, index) in colors" :key="index" :color="color" :style="blockStyle" />
  </div>
</template>
