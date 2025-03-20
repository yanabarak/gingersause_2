<template>
  <div class="misuse-block-wrapper d-flex justify-content-between gap-4">
    <div class="icon flex-shrink-0 align-self-start mt-1">
      <svg class="icon icon-value_item" width="38" height="41">
        <use :href="`src/assets/icons/symbol-defs.svg#${info.icon}`"></use>
      </svg>
    </div>
    <div class="text">
      <h5 class="fw-boldest mb-12">{{ info.title }}</h5>
      <p class="fs-12 mb-0">
        {{ info.text }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    info: Object,
  },
};
</script>
