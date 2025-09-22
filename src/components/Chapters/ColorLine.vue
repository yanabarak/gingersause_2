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
      colors: ['#80113e', '#a33c6d', '#b42f2c', '#77ac91', '#009000', '#e8d7a4'],
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
