<script setup lang="ts">
import DashNav from "../components/Dashboard/DashNav.vue";
import DashHeader from "../components/Dashboard/DashHeader.vue";
</script>
<template>
  <div class="flex">
    <DashNav />
    <div class="grow">
      <DashHeader />
      <div class="p-4 fade-in">
        <slot />
      </div>
    </div>
  </div>
</template>
