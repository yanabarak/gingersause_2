<template>
  <div class="wrapper-default-block">
    <span v-if="dataName" class="data-name">{{ dataName }}</span>
    <SubMenuDownload :elements="elements" grid="columns-2" />
    <div
      class="default-block d-flex align-items-center justify-content-center mockup-block mockup-block-spaces"
    >
      <img :src="imgSrc" alt="Mockup Image" :style="`width: ${percent}%;height: ${percent}%`" />
    </div>
  </div>
</template>

<script>
import SubMenuDownload from '../new-book/SubMenuDownload.vue';

export default {
  components: {
    SubMenuDownload,
  },
  props: {
    elements: {
      type: Array,
      required: true,
    },
    imgSrc: {
      type: String,
      required: true,
    },
    dataName: {
      type: String,
      default: '',
    },
    percent: {
      type: String,
      default: '',
    },
    grid: {
      type: String,
      default: '',
    },
  },
};
</script>
