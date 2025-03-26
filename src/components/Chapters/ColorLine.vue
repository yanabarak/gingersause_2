<template>
  <div class="d-flex gap-3 colors-line">
    <ColorBlock v-for="(color, index) in colors" :key="index" :color="color" :style="blockStyle" />
  </div>
</template>

<script>
import ColorBlock from '../GridBlocks/ColorBlock.vue';

export default {
  components: {
    ColorBlock,
  },
  data() {
    return {
      colors: [
        '#A2224C',
        '#FFFFFF',
        '#101820',
        '#EFF3EF',
        '#F2F6D0',
        '#FD9415',
        '#D0E1D4',
        '#F2F6D0',
      ],
    };
  },
  computed: {
    blockStyle: function () {
      const n = this.colors.length;
      return {
        maxWidth: `calc((100% - (${n - 1} * 15px) - 7px) / ${n})`,
      };
    },
  },
};
</script>
