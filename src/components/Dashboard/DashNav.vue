<script setup lang="ts">
type TNav = {
  icon: string;
  text: string;
  link: string;
  rightText?: string;
  rightColor?: string;
};
const menu: TNav[] = [
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-clipboard-check" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/><path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z"/><path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z"/></svg>',
    text: "Todo Example",
    link: "/dash/todo",
    // rightText: "Pro",
    // rightColor: "bg-blue-300",
  },
];
</script>
<template>
  <div>
    <aside
      class="w-64 h-screen bg-gray-50 shadow-sm shadow-emerald-100 drop-shadow-sm"
      aria-label="Sidebar"
    >
      <div
        class="px-3 py-4 overflow-y-auto rounded bg-gray-50 dark:bg-gray-800"
      >
        <div>
          <img
            src="https://www.emprenderconactitud.com/img/POC%20WCS%20(1).png"
            alt="Logo"
            class="w-28 h-18 mr-2"
          />
        </div>

        <ul class="space-y-2">
          <li v-for="item of menu">
            <RouterLink
              :to="item.link"
              class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <span
                class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                v-html="item.icon"
              >
              </span>
              <span class="ml-3">{{ item.text }}</span>
              <span
                v-if="item.text"
                :class="item.rightColor"
                class="inline-flex items-center justify-center px-2 ml-auto text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300"
                >{{ item.rightText }}</span
              >
            </RouterLink>
          </li>
        </ul>
      </div>
    </aside>
  </div>
</template>
