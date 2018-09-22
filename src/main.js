import Vue from "vue";
import iview from "iview";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import http from "./http";
import "iview/dist/styles/iview.css";

Vue.config.productionTip = false;
Vue.prototype.$http = http;

Vue.use(iview);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
