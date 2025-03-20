<script setup lang="ts">
import DownloadBlock from './DownloadBlock.vue';
</script>

<template>
  <div
    class="modal fade"
    id="downloadModalFavicon"
    tabindex="-1"
    aria-labelledby="downloadModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-md">
      <div class="modal-content">
        <div class="modal-header position-relative">
          <h3 class="modal-title fw-bold text-center sec-font fs-18">Icon & Favicon</h3>

          <button
            type="button"
            class="btn-close position-absolute"
            data-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="container-fluid">
            <DownloadBlock
              :logo-details="{
                logo: $store.state.faviconLogo,
                colorLogo: '#80003E',
                colorBg: '#fff',
              }"
              :elements="[
                { type: 'save', text: 'PNG' },
                { type: 'copy', text: 'PNG' },
                { type: 'save', text: 'SVG' },
                { type: 'copy', text: 'SVG' },
              ]"
            />
            <DownloadBlock
              :logo-details="{
                logo: $store.state.faviconLogo,
                colorLogo: '#000',
                colorBg: '#fff',
              }"
              :elements="[
                { type: 'save', text: 'PNG' },
                { type: 'copy', text: 'PNG' },
                { type: 'save', text: 'SVG' },
                { type: 'copy', text: 'SVG' },
              ]"
            /><DownloadBlock
              :logo-details="{
                logo: $store.state.faviconLogo,
                colorLogo: '#fff',
                colorBg: '#80003E',
              }"
              :elements="[
                { type: 'save', text: 'PNG' },
                { type: 'copy', text: 'PNG' },
                { type: 'save', text: 'SVG' },
                { type: 'copy', text: 'SVG' },
              ]"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
