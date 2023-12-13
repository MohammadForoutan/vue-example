<script setup lang="ts">
type TItem = {
  label: string;
  link: string;
};
const list: TItem[] = [
  { label: "item one", link: "#" },
  { label: "item two", link: "#" },
  { label: "item three", link: "#" },
  { label: "item four", link: "#" },
  { label: "item five", link: "#" },
];
</script>
<template>
  <footer class="flex justify-around text-white py-8 bg-indigo-900">
    <!-- section one -->
    <section>
      <li v-for="item in list">
        <a :href="item.link">{{ item.label }}</a>
      </li>
    </section>
    <!-- section two -->
    <section>
      <li v-for="item in list">
        <a :href="item.link">{{ item.label }}</a>
      </li>
    </section>
    <!-- section three -->
    <section>
      <li v-for="item in list">
        <a :href="item.link">{{ item.label }}</a>
      </li>
    </section>
    <!-- section four -->
    <section>
      <li v-for="item in list">
        <a :href="item.link">{{ item.label }}</a>
      </li>
    </section>
  </footer>
  <p class="text-center p-3 bg-slate-800 text-gray-50">
    Lorem ipsum dolor, sit amet consectetur adipisicing.
  </p>
</template>
