<script setup lang="ts">
import DownloadBlock from './DownloadBlock.vue';
</script>

<template>
  <div
    class="modal fade"
    id="downloadModal"
    tabindex="-1"
    aria-labelledby="downloadModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-md">
      <div class="modal-content">
        <div class="modal-header position-relative">
          <h3 class="modal-title fw-bold text-center sec-font fs-18">Logo versions</h3>

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
                logo: $store.state.mainLogo,
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
                logo: $store.state.mainLogo,
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
                logo: $store.state.alternativeLogo,
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
            <DownloadBlock
              :logo-details="{
                logo: $store.state.alternativeLogo,
                colorLogo: '#fff',
                colorBg: '#000',
              }"
              :elements="[
                { type: 'save', text: 'PNG' },
                { type: 'copy', text: 'PNG' },
                { type: 'save', text: 'SVG' },
                { type: 'copy', text: 'SVG' },
              ]"
            /><DownloadBlock
              :logo-details="{
                logo: $store.state.alternativeLogo,
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
                logo: $store.state.alternativeLogo,
                colorLogo: '#000',
                colorBg: '#fff',
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
