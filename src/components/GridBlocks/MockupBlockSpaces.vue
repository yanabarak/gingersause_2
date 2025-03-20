<script setup lang="ts">
import SubMenuDownload from '../new-book/SubMenuDownload.vue';

defineProps<{
  elements: { type: Array }[];
  imgSrc: string;
  dataName?: string;
  percent?: Number;
  grid?: string;
}>();
</script>
<template>
  <div class="wrapper-default-block">
    <span v-if="dataName" class="data-name">{{ dataName }}</span>
    <SubMenuDownload :elements="elements" grid="columns-2" />
    <div
      class="default-block d-flex align-items-center justify-content-center mockup-block mockup-block-spaces"
    >
      <img
        :src="imgSrc"
        alt="Mockup Image"
        :style="`width: ${this.percent}%;height: ${this.percent}%`"
      />
    </div>
  </div>
</template>
