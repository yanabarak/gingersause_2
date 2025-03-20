<template>
  <div
    class="wrapper-default-block d-flex align-items-center justify-content-center flex-grow-1 magnif-glass"
    data-toggle="modal"
    data-target="#downloadModalFavicon"
  >
    <span class="data-name">Icon & Favicon</span>
    <div class="three-elements default-block">
      <div
        v-html="$store.state.faviconLogo"
        class="d-flex align-items-center justify-content-center logo-block main-white"
      ></div>

      <div
        v-html="$store.state.faviconLogo"
        class="d-flex align-items-center justify-content-center logo-block main-white"
      ></div>

      <div
        v-html="$store.state.faviconLogo"
        class="d-flex align-items-center justify-content-center logo-block white-main"
      ></div>
    </div>
  </div>
</template>
