import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import * as VueRouter from "vue-router";
import { routes } from "./pages/routes";

const router = VueRouter.createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: VueRouter.createWebHistory(),
  routes, // short for `routes: routes`
});

const app = createApp(App);
// use plugins here
app.use(router);

app.mount("#app");
