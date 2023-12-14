import LoginVue from "./Auth/Login.vue";
import SignUpVue from "./Auth/SignUp.vue";
import DashOverViewVue from "./Dashboard/DashOverView.vue";
import DashProductVue from "./Dashboard/DashProduct.vue";
import DashStoreVue from "./Dashboard/DashStore.vue";
import DashTodoVue from "./Dashboard/DashTodo.vue";
import AboutVue from "./Public/About.vue";
import ContactVue from "./Public/Contact.vue";
import HomeVue from "./Public/Home.vue";
import NotFoundVue from "./Public/NotFound.vue";

export const routes = [
  { path: "/", component: HomeVue },
  { path: "/about", component: AboutVue },
  { path: "/contact", component: ContactVue },
  { path: "/auth/login", component: LoginVue },
  { path: "/auth/sign-up", component: SignUpVue },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFoundVue },
  { path: "/dash", component: DashOverViewVue },
  { path: "/dash/todo", component: DashTodoVue },
  { path: "/dash/store", component: DashStoreVue },
  { path: "/dash/products/:id", component: DashProductVue },
];
