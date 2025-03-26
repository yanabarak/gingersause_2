<template>
  <div class="parentClass account-page">
    <AccountHeader />
    <div class="container-fluid">
      <div class="wrapper d-flex align-items-stretch flex-row">
        <AccountSidebar />
        <AccountMain />
      </div>
    </div>
  </div>
</template>

<script setup>
import AccountHeader from '../components/new-book/AccountHeader.vue';
import AccountMain from '../components/new-book/AccountMain.vue';
import AccountSidebar from '../components/new-book/AccountSidebar.vue';
</script>
