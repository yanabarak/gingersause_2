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
        { img: '/src/assets/diagram13.svg', text: 'Icon 1' },
        { img: '/src/assets/diagram13.svg', text: 'Icon 2' },
        { img: '/src/assets/diagram13.svg', text: 'Icon 3' },
        { img: '/src/assets/diagram13.svg', text: 'Icon 4' },
        { img: '/src/assets/diagram13.svg', text: 'Icon 5' },
        { img: '/src/assets/diagram13.svg', text: 'Icon 6' },
        { img: '/src/assets/diagram13.svg', text: 'Icon 7' },
        { img: '/src/assets/diagram13.svg', text: 'Icon 8' },
      ],
    };
  },
};
</script>
