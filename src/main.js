import Vue from "vue";
import iview from "iview";
import viser from "viser-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import http from "./http";
import "iview/dist/styles/iview.css";

Vue.config.productionTip = false;
Vue.prototype.$http = http;

Vue.use(iview);
Vue.use(viser);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
