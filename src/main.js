import Vue from "vue";
import App from "./App.vue";
import VueX from "./store";
import router from "./router";

Vue.config.productionTip = false;

new Vue({
  router,
  VueX,
  render: h => h(App)
}).$mount("#app");
