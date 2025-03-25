<template>
  <div class="wrapper-default-block">
    <span v-if="dataName" class="data-name">{{ dataName }}</span>
    <SubMenuDownload :elements="elements" />
    <div
      class="default-block d-flex align-items-center justify-content-between font-block flex-column"
      :style="`background-color: ${font.hex}; color: ${textColor}`"
    >
      <div class="d-flex flex-column align-items-center">
        <div class="title">{{ font.type }} Font</div>
        <h2 :class="`font-name ${font.type.toLowerCase()}`" :style="{ fontFamily: font.name }">
          {{ font.name }}
        </h2>
      </div>
      <h3 :class="`preview ${font.name.toLowerCase()}`" :style="{ fontFamily: font.name }">Aa</h3>
    </div>
  </div>
</template>

<script>
import SubMenuDownload from '../new-book/SubMenuDownload.vue';

export default {
  components: {
    SubMenuDownload,
  },
  props: {
    font: {
      type: Object,
      required: true,
      validator: function (value) {
        return (
          'url' in value &&
          'name' in value &&
          'type' in value &&
          typeof value.url === 'string' &&
          typeof value.name === 'string' &&
          typeof value.type === 'string' &&
          (value.hex === undefined || typeof value.hex === 'string')
        );
      },
    },
    elements: {
      type: Array,
      required: true,
    },
    dataName: {
      type: String,
      default: '',
    },
  },
  computed: {
    textColor: function () {
      return this.font.hex ? this.getContrastColor(this.font.hex) : '#000000';
    },
  },
  methods: {
    loadFont: function (url, name) {
      const style = document.createElement('style');
      style.textContent = `@import url('${url}');`;
      document.head.appendChild(style);
    },
    hexToRgb: function (hex) {
      hex = hex.replace(/^#/, '');
      if (hex.length === 3) {
        hex = hex
          .split('')
          .map(c => c + c)
          .join('');
      }
      const bigint = parseInt(hex, 16);
      return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
    },
    getContrastColor: function (hex) {
      const [r, g, b] = this.hexToRgb(hex).map(v => v / 255);
      const gammaCorrected = function (c) {
        return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
      };
      const luminance =
        0.2126 * gammaCorrected(r) + 0.7152 * gammaCorrected(g) + 0.0722 * gammaCorrected(b);
      return luminance > 0.5 ? '#000000' : '#FFFFFF';
    },
  },
  created() {
    this.loadFont(this.font.url, this.font.name);
  },
};
</script>
