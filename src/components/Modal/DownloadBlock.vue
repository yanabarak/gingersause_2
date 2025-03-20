<script setup lang="ts">
import LogoBlock from '../GridBlocks/LogoBlock.vue';
import CopyButton from '../new-book/CopyButton.vue';
import SaveButton from '../new-book/SaveButton.vue';

interface LogoDetails {
  logo: string;
  colorLogo: string;
  colorBg: string;
}

interface Element {
  type: 'save' | 'copy';
  text: string;
}

defineProps<{
  logoDetails: LogoDetails;
  elements?: Element[];
}>();

const defaultElements: Element[] = [
  { type: 'save', text: 'PNG' },
  { type: 'copy', text: 'PNG' },
  { type: 'save', text: 'SVG' },
  { type: 'copy', text: 'SVG' },
];
</script>

<template>
  <div class="block-download d-flex justify-content-between">
    <div class="img-wrapper">
      <LogoBlock :details="logoDetails" />
    </div>
    <div class="button-wrapper d-grid">
      <div v-for="(item, index) in elements || defaultElements" :key="index">
        <SaveButton v-if="item.type === 'save'" :text="item.text" :class="`save-${item.text}`" />
        <CopyButton v-if="item.type === 'copy'" :text="item.text" :class="`copy-${item.text}`" />
      </div>
    </div>
  </div>
</template>
