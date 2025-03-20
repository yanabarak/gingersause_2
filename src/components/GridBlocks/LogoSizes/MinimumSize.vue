<template>
  <div class="wrapper-default-block minimum-space-block">
    <span v-if="dataName" class="data-name">{{ dataName }}</span>

    <div class="default-block d-flex align-items-center justify-content-center">
      <div class="justify-content-xl-around minimum-group w-100">
        <div class="minimum-full-logo">
          <div :style="{ width: widthFullLogoD + 'px' }" class="mx-auto">
            <div class="mb-2" v-html="$store.state.mainLogo"></div>
            <div class="minimum-width">
              <span class="value">{{ widthFullLogo }}</span
              >px/ <span class="value" v-html="formatRoundedValue(widthFullLogoInMM)"></span>mm/
              <span class="value" v-html="formatRoundedValue(widthFullLogoInInches)"></span>”
            </div>
          </div>

          <div class="explain mt-3 fs-12 text-center">
            The Guberman logo should never be smaller than {{ widthFullLogo }}px in digital or
            <span v-html="formatRoundedValue(widthFullLogoInMM)"></span>mm in print.
          </div>
        </div>
        <div class="minimum-small-logo">
          <div :style="{ width: widthIconD + 'px' }" class="mx-auto">
            <div class="mb-2 d-flex align-content-center" v-html="$store.state.faviconLogo"></div>
            <div class="minimum-width"></div>
          </div>

          <div class="explain mt-3 fs-12 text-center">
            The Guberman icon should never be smaller than {{ widthIcon }}px in digital or
            <span v-html="formatRoundedValue(widthIconInMM)"></span>mm /
            <span class="value" v-html="formatRoundedValue(widthIconInInches)"></span>" in print.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      widthFullLogo: 160,
      widthIcon: 23,
      windowWidth: window.innerWidth, // Store window width for reactive updates
    };
  },
  props: {
    dataName: {
      type: String,
      required: false,
    },
  },
  computed: {
    widthFullLogoD() {
      return this.windowWidth < 850 ? this.widthFullLogo * 0.75 : this.widthFullLogo;
    },
    widthIconD() {
      return this.windowWidth < 850 ? this.widthIcon * 0.75 : this.widthIcon;
    },
    widthFullLogoInMM() {
      return this.widthFullLogo * 0.264583;
    },
    widthFullLogoInInches() {
      return this.widthFullLogo * 0.010417;
    },
    widthIconInMM() {
      return this.widthIcon * 0.264583;
    },
    widthIconInInches() {
      return this.widthIcon * 0.010417;
    },
  },
  methods: {
    setActiveSection(id) {
      this.$emit('set-active-section', id);
    },
    formatRoundedValue(value) {
      const roundedValue = Math.round(value * 4) / 4;
      const wholeNumberPart = Math.floor(roundedValue);
      const fractionalPart = roundedValue % 1;

      const fractions = {
        0.25: '1/4',
        0.5: '1/2',
        0.75: '3/4',
      };

      if (fractionalPart === 0) return wholeNumberPart.toString();
      return wholeNumberPart
        ? `${wholeNumberPart} ${fractions[fractionalPart] || fractionalPart.toFixed(2)}`
        : fractions[fractionalPart] || fractionalPart.toFixed(2);
    },
    updateWindowWidth() {
      this.windowWidth = window.innerWidth;
    },
  },
  mounted() {
    window.addEventListener('resize', this.updateWindowWidth);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateWindowWidth);
  },
};
</script>
