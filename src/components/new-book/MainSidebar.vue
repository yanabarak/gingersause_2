<template>
  <aside class="is_expanded fixed-top flex-shrink-0 px-0 d-none d-xl-block">
    <ZeroLine class="d-none d-xl-flex" />
    <BrandDesigner />
  </aside>
</template>

<script>
import ZeroLine from '../Chapters/ZeroLine.vue';
import BrandDesigner from './sidebar/BrandDesigner.vue';

export default {
  components: { ZeroLine, BrandDesigner },
  data() {
    return {
      imgSrc: '/src/assets/tshirt.png',
    };
  },
};
</script>
