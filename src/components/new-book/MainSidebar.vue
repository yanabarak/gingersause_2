<script setup lang="ts">
import ZeroLine from '../Chapters/ZeroLine.vue';
import BrandDesigner from './sidebar/BrandDesigner.vue';

const imgSrc = '/src/assets/tshirt.png';
</script>

<template>
  <aside class="is_expanded fixed-top flex-shrink-0 px-0 d-none d-xl-block">
    <ZeroLine class="d-none d-xl-flex" />
    <BrandDesigner />
  </aside>
</template>
