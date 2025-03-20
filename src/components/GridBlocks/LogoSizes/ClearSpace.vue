<template>
  <div class="wrapper-default-block clear-space-block">
    <span v-if="dataName" class="data-name">{{ dataName }}</span>

    <div class="default-block d-flex align-items-center justify-content-center">
      <div class="clear-block-wrapper">
        <div
          class="top-arrow arrow"
          :style="{ width: `${adjustedWidth + 2}px`, marginLeft: `30px` }"
        >
          <span>x</span>
        </div>
        <div class="d-flex">
          <div class="left-arrow arrow" :style="{ height: `${adjustedHeight + 2}px` }">
            <span>x</span>
          </div>
          <div
            class="grid-container-clear2"
            :style="{
              gridTemplateColumns: `${adjustedWidth}px ${adjustedWidthL}px ${adjustedWidth}px`,
            }"
          >
            <div class="top-left" :style="spaceStyle">
              <div v-html="$store.state.faviconLogo" class="logo-favicon"></div>
            </div>
            <div class=""></div>
            <div class="top-right" :style="spaceStyle">
              <div v-html="$store.state.faviconLogo" class="logo-favicon"></div>
            </div>
            <div class=""></div>
            <div class="center" :style="logoStyle">
              <div v-html="$store.state.mainLogo" class="logo-main"></div>
            </div>
            <div class=""></div>
            <div class="bottom-left" :style="spaceStyle">
              <div v-html="$store.state.faviconLogo" class="logo-favicon"></div>
            </div>
            <div class=""></div>
            <div class="bottom-right" :style="spaceStyle">
              <div v-html="$store.state.faviconLogo" class="logo-favicon"></div>
            </div>
          </div>
          <div class="right-arrow arrow" :style="{ height: `${adjustedHeight + 2}px` }">
            <span>x</span>
          </div>
        </div>
        <div
          class="bottom-arrow arrow"
          :style="{
            width: `${adjustedWidth + 2}px`,
            marginLeft: 'auto',
            marginLeft: `${adjustedWidth + 30 + adjustedWidthL + 2}px`,
          }"
        >
          <span>x</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      required: true,
    },
    height: {
      type: Number,
      required: true,
    },
    widthL: {
      type: Number,
      required: true,
    },
    heightL: {
      type: Number,
      required: true,
    },
    dataName: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      adjustedWidth: this.width,
      adjustedHeight: this.height,
      adjustedWidthL: this.widthL,
      adjustedHeightL: this.heightL,
    };
  },
  computed: {
    spaceStyle() {
      return {
        height: `${this.adjustedHeight}px`,
        width: `${this.adjustedWidth}px`,
      };
    },
    logoStyle() {
      return {
        height: `${this.adjustedHeightL}px`,
        width: `${this.adjustedWidthL}px`,
      };
    },
  },
  methods: {
    adjustSizes() {
      if (window.innerWidth < 850) {
        this.adjustedWidth = this.width / 1.2;
        this.adjustedHeight = this.height / 1.2;
        this.adjustedWidthL = this.widthL / 1.2;
        this.adjustedHeightL = this.heightL / 1.2;
      } else {
        this.adjustedWidth = this.width;
        this.adjustedHeight = this.height;
        this.adjustedWidthL = this.widthL;
        this.adjustedHeightL = this.heightL;
      }
    },
  },
  mounted() {
    this.adjustSizes();
    window.addEventListener('resize', this.adjustSizes);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.adjustSizes);
  },
};
</script>
