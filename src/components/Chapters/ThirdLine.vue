<template>
  <div class="d-flex gap-3 first-line third-line">
    <template v-if="!blockIndex && blockIndex !== 0">
      <mockup-block
        :img-src="imgSrc1"
        :elements="[
          { type: 'save', text: 'JPG' },
          { type: 'copy', text: 'JPG' },
        ]"
      />
      <mockup-block
        :img-src="imgSrc2"
        :elements="[
          { type: 'save', text: 'JPG' },
          { type: 'copy', text: 'JPG' },
        ]"
      />
      <font-block :font="font1" :elements="[{ type: 'save', text: 'Font' }]" />
      <font-block
        :font="font2"
        :elements="[
          { type: 'link', text: 'Link to Font page', url: 'https://fonts.cdnfonts.com/css/daniel' },
        ]"
      />
    </template>
    <mockup-block
      v-else-if="blockIndex === 0"
      :img-src="imgSrc1"
      :elements="[
        { type: 'save', text: 'JPG' },
        { type: 'copy', text: 'JPG' },
      ]"
    />
    <mockup-block
      v-else-if="blockIndex === 1"
      :img-src="imgSrc2"
      :elements="[
        { type: 'save', text: 'JPG' },
        { type: 'copy', text: 'JPG' },
      ]"
    />
    <font-block
      v-else-if="blockIndex === 2"
      :font="font1"
      :elements="[{ type: 'save', text: 'Font' }]"
    />
    <font-block
      v-else-if="blockIndex === 3"
      :font="font2"
      :elements="[
        { type: 'link', text: 'Link to Font page', url: 'https://fonts.cdnfonts.com/css/daniel' },
      ]"
    />
  </div>
</template>

<script>
import FontBlock from '../GridBlocks/FontBlock.vue';
import MockupBlock from '../GridBlocks/MockupBlock.vue';

export default {
  components: { FontBlock, MockupBlock },
  props: {
    blockIndex: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {
      imgSrc1: '/src/assets/diagram11.svg',
      imgSrc2: '/src/assets/image_mockup2.png',
      font1: {
        type: 'Primary',
        name: 'Poppins',
        url: 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
        download: true,
        hex: '#ffffff',
      },
      font2: {
        type: 'Secondary',
        name: 'Daniel',
        url: 'https://fonts.cdnfonts.com/css/daniel',
        download: false,
        hex: '#101820',
      },
    };
  },
};
</script>
