<template>
  <div
    :style="`color: ${details.colorLogo}; background-color: ${details.colorBg}`"
    v-html="details.logo"
    :class="details.logo"
    class="d-flex align-items-center justify-content-center logo-block main-white"
  ></div>
</template>

<script>
export default {
  props: {
    details: {
      type: Object,
      required: true,
      validator: function (value) {
        return (
          'logo' in value &&
          'colorLogo' in value &&
          'colorBg' in value &&
          typeof value.logo === 'string' &&
          typeof value.colorLogo === 'string' &&
          typeof value.colorBg === 'string'
        );
      },
    },
  },
};
</script>
