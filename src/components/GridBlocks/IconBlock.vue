<template>
  <div class="wrapper-default-block">
    <SubMenuDownload :elements="elements" />
    <div class="default-block d-flex justify-content-center align-items-center icons-block">
      <img :src="img" :alt="text" />
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
    img: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    elements: {
      type: Array,
      required: true,
    },
  },
};
</script>
