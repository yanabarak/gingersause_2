<template>
  <div class="parentClass">
    <MainHeader />
    <div class="container-fluid">
      <div class="wrapper d-flex align-items-stretch flex-md-row">
        <MainSidebar />
        <MainBook />
      </div>
    </div>
  </div>
</template>

<script setup>
import MainSidebar from '../components/new-book/MainSidebar.vue';
import MainHeader from '../components/new-book/MainHeader.vue';

import MainBook from '../components/new-book/MainBook.vue';
</script>
