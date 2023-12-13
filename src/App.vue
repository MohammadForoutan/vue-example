<script setup lang="ts"></script>
<template>
  <RouterView v-slot="{ Component }">
    <Transition name="none">
      <component :is="Component"></component>
    </Transition>
  </RouterView>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
