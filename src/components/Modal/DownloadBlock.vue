<template>
  <div class="block-download d-flex justify-content-between">
    <div class="img-wrapper">
      <LogoBlock :details="logoDetails" />
    </div>
    <div class="button-wrapper d-grid">
      <div v-for="(item, index) in elements || defaultElements" :key="index">
        <SaveButton v-if="item.type === 'save'" :text="item.text" :class="`save-${item.text}`" />
        <CopyButton v-if="item.type === 'copy'" :text="item.text" :class="`copy-${item.text}`" />
      </div>
    </div>
  </div>
</template>

<script>
import LogoBlock from '../GridBlocks/LogoBlock.vue';
import CopyButton from '../new-book/CopyButton.vue';
import SaveButton from '../new-book/SaveButton.vue';

export default {
  components: {
    LogoBlock,
    CopyButton,
    SaveButton,
  },
  props: {
    logoDetails: {
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
    elements: {
      type: Array,
      default: null,
      validator: function (value) {
        if (!value) return true; // Allow null/undefined since it's optional
        return value.every(
          item => ['save', 'copy'].includes(item.type) && typeof item.text === 'string'
        );
      },
    },
  },
  data() {
    return {
      defaultElements: [
        { type: 'save', text: 'PNG' },
        { type: 'copy', text: 'PNG' },
        { type: 'save', text: 'SVG' },
        { type: 'copy', text: 'SVG' },
      ],
    };
  },
};
</script>
