<template>
  <div
    class="wrapper-default-block d-flex align-items-center justify-content-center flex-grow-1 magnif-glass"
    data-toggle="modal"
    data-target="#downloadModal"
  >
    <span class="data-name">Logo versions</span>
    <div class="four-elements default-block">
      <div
        v-html="$store.state.mainLogo"
        class="d-flex align-items-center justify-content-center logo-block main-white"
      ></div>

      <div
        v-html="$store.state.mainLogo"
        class="d-flex align-items-center justify-content-center logo-block black-white"
      ></div>

      <div
        v-html="$store.state.alternativeLogo"
        class="d-flex align-items-center justify-content-center logo-block main-white"
      ></div>

      <div
        v-html="$store.state.alternativeLogo"
        class="d-flex align-items-center justify-content-center logo-block black-white"
      ></div>
    </div>
  </div>
</template>
