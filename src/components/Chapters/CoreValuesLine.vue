<template>
  <div class="d-flex gap-3 core-values-line">
    <div
      class="wrapper-default-block magnif-glass d-flex align-items-center justify-content-center flex-grow-1"
      data-toggle="modal"
      data-target="#downloadModal"
    >
      <span class="data-name">Core Values</span>
      <div class="default-block core-values-block-wrap w-100">
        <h3 class="fw-boldest fs-32 mb-40">Core Values</h3>
        <div class="content">
          <CoreValuesBlock v-for="(info, index) in misuseBlocks" :key="index" :info="info" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import CoreValuesBlock from '../GridBlocks/CoreValues/CoreValuesBlock.vue';
</script>
<script>
export default {
  data() {
    return {
      misuseBlocks: [
        {
          icon: 'icon-value_item',
          title: 'Value 1',
          text: 'The DeepDive logo should never be smaller than 160px in digital or  45mm in print.',
        },
        {
          icon: 'icon-value_item',
          title: 'Value 1',
          text: 'The DeepDive logo should never be smaller than 160px in digital or  45mm in print.',
        },
        {
          icon: 'icon-value_item',
          title: 'Value 1',
          text: 'The DeepDive logo should never be smaller than 160px in digital or  45mm in print.',
        },
        {
          icon: 'icon-value_item',
          title: 'Value 1',
          text: 'The DeepDive logo should never be smaller than 160px in digital or  45mm in print.',
        },
        {
          icon: 'icon-value_item',
          title: 'Value 1',
          text: 'The DeepDive logo should never be smaller than 160px in digital or  45mm in print.',
        },
        {
          icon: 'icon-value_item',
          title: 'Value 1',
          text: 'The DeepDive logo should never be smaller than 160px in digital or  45mm in print.',
        },
      ],
    };
  },
};
</script>
