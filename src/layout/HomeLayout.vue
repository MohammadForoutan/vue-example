<script setup lang="ts">
import Header from "../components/Home/Header.vue";
import Footer from "../components/Home/Footer.vue";
</script>
<template>
  <div>
    <Header />

    <div class="fade-in">
      <slot />

      <Footer />
    </div>
  </div>
</template>

<style>
.fade-in {
  opacity: 0;
  animation: fadeIn 0.8s forwards; /* 2s duration */
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
