<template>
  <div class="d-flex gap-3 first-line">
    <template v-if="!blockIndex && blockIndex !== 0">
      <mockup-block-spaces
        :img-src="imgSrc1"
        grid="columns-1"
        :percent="percent"
        :elements="[
          { type: 'save', text: 'PNG' },
          { type: 'save', text: 'SVG' },
          { type: 'copy', text: 'PNG' },
          { type: 'copy', text: 'SVG' },
        ]"
      />
      <mockup-block-spaces
        :img-src="imgSrc2"
        grid="columns-1"
        :percent="percent"
        :elements="[
          { type: 'save', text: 'PNG' },
          { type: 'save', text: 'SVG' },
          { type: 'copy', text: 'PNG' },
          { type: 'copy', text: 'SVG' },
        ]"
      />
      <mockup-block-spaces
        :img-src="imgSrc3"
        grid="columns-1"
        :percent="percent"
        :elements="[
          { type: 'save', text: 'PNG' },
          { type: 'save', text: 'SVG' },
          { type: 'copy', text: 'PNG' },
          { type: 'copy', text: 'SVG' },
        ]"
      />
      <mockup-block-spaces
        :img-src="imgSrc4"
        grid="columns-1"
        :percent="percent"
        :elements="[
          { type: 'save', text: 'PNG' },
          { type: 'save', text: 'SVG' },
          { type: 'copy', text: 'PNG' },
          { type: 'copy', text: 'SVG' },
        ]"
      />
    </template>
    <mockup-block-spaces
      v-else-if="blockIndex === 0"
      :img-src="imgSrc1"
      :percent="percent"
      grid="columns-1"
      :elements="[
        { type: 'save', text: 'PNG' },
        { type: 'save', text: 'SVG' },
        { type: 'copy', text: 'PNG' },
        { type: 'copy', text: 'SVG' },
      ]"
    />
    <mockup-block-spaces
      v-else-if="blockIndex === 1"
      :img-src="imgSrc2"
      :percent="percent"
      grid="columns-1"
      :elements="[
        { type: 'save', text: 'PNG' },
        { type: 'save', text: 'SVG' },
        { type: 'copy', text: 'PNG' },
        { type: 'copy', text: 'SVG' },
      ]"
    />
    <mockup-block-spaces
      v-else-if="blockIndex === 2"
      :img-src="imgSrc3"
      :percent="percent"
      grid="columns-1"
      :elements="[
        { type: 'save', text: 'PNG' },
        { type: 'save', text: 'SVG' },
        { type: 'copy', text: 'PNG' },
        { type: 'copy', text: 'SVG' },
      ]"
    />
    <mockup-block-spaces
      v-else-if="blockIndex === 3"
      :img-src="imgSrc4"
      :percent="percent"
      grid="columns-1"
      :elements="[
        { type: 'save', text: 'PNG' },
        { type: 'save', text: 'SVG' },
        { type: 'copy', text: 'PNG' },
        { type: 'copy', text: 'SVG' },
      ]"
    />
  </div>
</template>
<script>
import MockupBlockSpaces from '../GridBlocks/MockupBlockSpaces.vue';

export default {
  components: { MockupBlockSpaces },
  props: {
    blockIndex: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {
      percent: '75',
      imgSrc1: '/src/assets/DDorange.svg',
      imgSrc2: '/src/assets/DDbordeaux.svg',
      imgSrc3: '/src/assets/DDyellow.svg',
      imgSrc4: '/src/assets/DDgreen.svg',
    };
  },
};
</script>
