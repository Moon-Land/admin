import Vue from "vue";
import iview from "iview";
import viser from "viser-vue";
import ElementUI from "element-ui";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import http from "./http";
import "iview/dist/styles/iview.css";
import "element-ui/lib/theme-chalk/index.css";

Vue.config.productionTip = false;
Vue.prototype.$http = http;

Vue.use(iview);
Vue.use(viser);
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
