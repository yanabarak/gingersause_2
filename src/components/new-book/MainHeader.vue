<template>
  <nav class="navbar navbar-expand-md fixed-top bg-white">
    <div class="container-fluid">
      <div class="align-content-center d-flex flex-grow-1 justify-content-between">
        <div class="name fs-20 fw-500 align-self-center me-3">DeepDive Brand Book</div>
        <LoginnedPart />
      </div>
    </div>
  </nav>
</template>

<script setup>
//import LoginPart from './header/LoginPart.vue';
import LoginnedPart from './header/LoginnedPart.vue';
</script>
