<script setup lang="ts">
import SubMenuDownload from '../new-book/SubMenuDownload.vue';

const loadFont = (url: string, name: string) => {
  const style = document.createElement('style');
  style.textContent = `@import url('${url}');`;
  document.head.appendChild(style);
};

const props = defineProps<{
  font: { url: string; name: string; type: string; hex?: string };
  elements: { type: Array }[];
  dataName?: string;
}>();

// Methods
const hexToRgb = (hex: string): [number, number, number] => {
  hex = hex.replace(/^#/, '');
  if (hex.length === 3) {
    hex = hex
      .split('')
      .map(c => c + c)
      .join('');
  }
  const bigint = parseInt(hex, 16);
  return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
};

const getContrastColor = (hex: string): string => {
  const [r, g, b] = hexToRgb(hex).map(v => v / 255);
  const gammaCorrected = (c: number): number =>
    c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  const luminance =
    0.2126 * gammaCorrected(r) + 0.7152 * gammaCorrected(g) + 0.0722 * gammaCorrected(b);
  return luminance > 0.5 ? '#000000' : '#FFFFFF';
};

// Computed property using Vue's computed()
import { computed } from 'vue';

const textColor = computed(() => {
  return props.font.hex ? getContrastColor(props.font.hex) : '#000000'; // Default to black if no hex
});

loadFont(props.font.url, props.font.name);
</script>

<template>
  <div class="wrapper-default-block">
    <span v-if="dataName" class="data-name">{{ dataName }}</span>
    <SubMenuDownload :elements="elements" />
    <div
      class="default-block d-flex align-items-center justify-content-between font-block flex-column"
      :style="`background-color: ${props.font.hex}; color: ${textColor}`"
    >
      <div class="d-flex flex-column align-items-center">
        <div class="title">{{ font.type }} Font</div>
        <h2 :class="`font-name ${font.type.toLowerCase()}`" :style="{ fontFamily: font.name }">
          {{ font.name }}
        </h2>
      </div>
      <h3 :class="`preview ${font.name.toLowerCase()}`" :style="{ fontFamily: font.name }">Aa</h3>
    </div>
  </div>
</template>
