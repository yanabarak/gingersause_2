<template>
  <div class="d-flex gap-3 first-line">
    <template v-if="!blockIndex && blockIndex !== 0">
      <mockup-block-spaces
        :img-src="imgSrc1"
        grid="columns-1"
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
      imgSrc1: '/src/assets/diagram13.svg',
      imgSrc2: '/src/assets/diagram14.svg',
      imgSrc3: '/src/assets/diagram15.svg',
    };
  },
};
</script>
