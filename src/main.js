import Vue from "vue";
import App from "./App.vue";
import router from "./router/router.js";

import { Field, NavBar, Cell, Button, Icon } from "vant";
Vue.use(Field);
Vue.use(NavBar);
Vue.use(Cell);
Vue.use(Button);
Vue.use(Icon);

import 'vant/lib/index.css';

new Vue({
  router,
  mounted() {},
  render: h => h(App)
}).$mount("#app");
