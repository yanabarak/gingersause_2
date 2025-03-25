<template>
  <div class="gap-3 zero-line flex-xl-column">
    <div class="wrapper-default-block">
      <span class="data-name">Main logo</span>
      <SubMenuDownload
        grid="columns-2"
        :elements="[
          { type: 'save', text: 'PNG' },
          { type: 'save', text: 'SVG' },
          { type: 'copy', text: 'PNG' },
          { type: 'copy', text: 'SVG' },
        ]"
      />
      <div
        v-html="$store.state.mainLogo"
        class="logo-block default-block d-flex align-items-center justify-content-center main-white"
      ></div>
    </div>
    <MockupBlock
      :imgSrc="imgSrc"
      :elements="[
        { type: 'save', text: 'JPG' },
        { type: 'copy', text: 'JPG' },
      ]"
    />
  </div>
</template>

<script>
import MockupBlock from '../GridBlocks/MockupBlock.vue';
import SubMenuDownload from '../new-book/SubMenuDownload.vue';

export default {
  components: {
    MockupBlock,
    SubMenuDownload,
  },
  data() {
    return {
      imgSrc: '/src/assets/tshirt.png',
    };
  },
};
</script>
