<script setup lang="ts">
defineProps<{
  info: Object;
  dataName?: string;
}>();
</script>
<template>
  <div class="wrapper-default-block">
    <span v-if="dataName" class="data-name">{{ dataName }}</span>

    <div class="default-block text-block">
      <h3 class="fw-boldest fs-32 mb-4">{{ info.title }}</h3>
      <div class="text">{{ info.text }}</div>
    </div>
  </div>
</template>
