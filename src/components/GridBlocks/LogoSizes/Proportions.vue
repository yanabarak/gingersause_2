<template>
  <div class="wrapper-default-block proportions-block">
    <span v-if="dataName" class="data-name">{{ dataName }}</span>

    <div class="default-block d-flex align-items-center justify-content-center">
      <div class="proportions-block">
        <div class="proportions-left-arrow" :style="proportionsStyle">x</div>

        <div class="proportions-wrapper">
          <div class="proportions-top-arrow" :style="proportionsStyle">
            {{ ratio == 1 ? '' : ratio }}x
          </div>
          <div :style="proportionsStyle" class="proportions-element">
            <div v-html="$store.state.mainLogo" class="logo-proportions"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    ratio: {
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
      baseHeight: 35,
      smallScreenHeight: 50,
      windowWidth: window.innerWidth,
    };
  },
  computed: {
    proportionsStyle() {
      const height = this.windowWidth < 850 ? this.smallScreenHeight : this.baseHeight;
      return {
        height: `${height}px`,
        width: `${height * this.ratio}px`,
      };
    },
  },
  created() {
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize() {
      this.windowWidth = window.innerWidth;
    },
  },
};
</script>
