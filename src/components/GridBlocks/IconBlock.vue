<template>
  <div class="wrapper-default-block">
    <SubMenuDownload :elements="elements" />
    <div class="default-block d-flex justify-content-center align-items-center icons-block">
      <object :data="img" type="image/svg+xml"></object>
    </div>
  </div>
</template>

<script setup lang="ts">
import SubMenuDownload from '../new-book/SubMenuDownload.vue';

defineProps<{
  img: string;
  text: string;
  elements: { type: string; text: string }[];
}>();
</script>
