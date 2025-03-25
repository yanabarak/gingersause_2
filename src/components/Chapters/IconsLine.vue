<template>
  <div v-if="iconsBlocks" class="d-flex gap-3 icons-line">
    <IconBlock
      v-for="(block, index) in iconsBlocks"
      :key="index"
      :img="block.img"
      :text="block.text"
      grid="columns-1"
      :elements="[
        { type: 'save', text: 'PNG' },
        { type: 'copy', text: 'PNG' },
        { type: 'save', text: 'SVG' },
        { type: 'copy', text: 'SVG' },
      ]"
    />
  </div>
</template>

<script>
import IconBlock from '../GridBlocks/IconBlock.vue';

export default {
  components: {
    IconBlock,
  },
  data() {
    return {
      iconsBlocks: [
        { img: '/src/assets/icons/icon_1.svg', text: 'Icon 1' },
        { img: '/src/assets/icons/icon_2.svg', text: 'Icon 2' },
        { img: '/src/assets/icons/icon_3.svg', text: 'Icon 3' },
        { img: '/src/assets/icons/icon_4.svg', text: 'Icon 4' },
        { img: '/src/assets/icons/icon_5.svg', text: 'Icon 5' },
        { img: '/src/assets/icons/icon_6.svg', text: 'Icon 6' },
        { img: '/src/assets/icons/icon_7.svg', text: 'Icon 7' },
        { img: '/src/assets/icons/icon_8.svg', text: 'Icon 8' },
      ],
    };
  },
};
</script>
