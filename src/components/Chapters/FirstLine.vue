<template>
  <div class="d-flex gap-3 first-line">
    <FourELements />
    <ThreeElements />
    <MockupBlock
      :imgSrc="imgSrc"
      :elements="[
        { type: 'save', text: 'JPG' },
        { type: 'copy', text: 'JPG' },
      ]"
      dataName="Mockup"
    />
  </div>
</template>

<template>
  <div class="d-flex gap-3 first-line">
    <template v-if="!blockIndex && blockIndex !== 0">
      <FourELements />
      <ThreeElements />
      <MockupBlock
        :imgSrc="imgSrc"
        :elements="[
          { type: 'save', text: 'JPG' },
          { type: 'copy', text: 'JPG' },
        ]"
        dataName="Mockup"
      />
    </template>
    <FourELements v-else-if="blockIndex === 0" />
    <ThreeElements v-else-if="blockIndex === 1" />
    <MockupBlock
      v-else-if="blockIndex === 2"
      :imgSrc="imgSrc"
      :elements="[
        { type: 'save', text: 'JPG' },
        { type: 'copy', text: 'JPG' },
      ]"
      dataName="Mockup"
    />
  </div>
</template>
<script>
import FourELements from '../GridBlocks/FourELements.vue';
import MockupBlock from '../GridBlocks/MockupBlock.vue';
import ThreeElements from '../GridBlocks/ThreeElements.vue';

export default {
  components: { FourELements, MockupBlock, ThreeElements },
  props: {
    blockIndex: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {
      imgSrc: '/src/assets/image_mockup1.png',
    };
  },
};
</script>
