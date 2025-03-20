<script setup lang="ts">
import SubMenuDownload from '../new-book/SubMenuDownload.vue';

defineProps<{
  elements: { type: Array }[];
  imgSrc: string;
  dataName?: string;
}>();
</script>
<template>
  <div class="wrapper-default-block">
    <span v-if="dataName" class="data-name">{{ dataName }}</span>
    <SubMenuDownload :elements="elements" />
    <div class="default-block d-flex align-items-center justify-content-center mockup-block">
      <img :src="imgSrc" alt="Mockup Image" />
    </div>
  </div>
</template>
