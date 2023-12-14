<script setup lang="ts">
import { onMounted, ref } from "vue";
import { TProduct } from "./DashStore.vue";
import { useRoute } from "vue-router";
import DashboardLayout from "../../layout/DashboardLayout.vue";

const product = ref<TProduct>();
const route = useRoute();
onMounted(() => {
  fetch("https://fakestoreapi.com/products/" + route.params.id)
    .then((p) => p.json())
    .then((p) => (product.value = p));
});
</script>
<template>
  <!-- component -->
  <DashboardLayout>
    <div class="flex flex-col justify-center h-screen">
      <div
        class="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white"
      >
        <div class="w-full md:w-1/3 bg-white grid place-items-center">
          <img :src="product?.image" alt="tailwind logo" class="rounded-xl" />
        </div>
        <div class="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
          <div class="flex justify-between item-center">
            <p class="text-gray-500 font-medium hidden md:block">Vacations</p>
            <div class="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-yellow-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
              <p class="text-gray-600 font-bold text-sm ml-1">
                4.96
                <span class="text-gray-500 font-normal">(76 reviews)</span>
              </p>
            </div>
            <div class="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-pink-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div
              class="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block"
            >
              Superhost
            </div>
          </div>
          <h3 class="font-black text-gray-800 md:text-3xl text-xl">
            {{ product?.title }}
          </h3>
          <p class="md:text-lg text-gray-500 text-base">
            {{ product?.description }}
          </p>
          <p class="text-xl font-black text-gray-800">${{ product?.price }}</p>
        </div>
      </div>
    </div>
  </DashboardLayout>
</template>
