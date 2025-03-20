<script setup lang="ts">
import ClearSpace from '../GridBlocks/LogoSizes/ClearSpace.vue';
import MinimumSize from '../GridBlocks/LogoSizes/MinimumSize.vue';
import Proportions from '../GridBlocks/LogoSizes/Proportions.vue';
</script>

<template>
  <div class="d-flex gap-3 logo-sizes-line">
    <ClearSpace :width="30" :height="30" :widthL="160" :heightL="40" dataName="Clear Space" />
    <MinimumSize dataName="Minimum Size" />
    <Proportions dataName="Proportions" :ratio="4" />
  </div>
</template>
