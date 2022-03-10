import Vue from 'vue';
import App from './App';
import BootstrapVue from "bootstrap-vue/dist/bootstrap-vue.esm";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import router from './router';




Vue.config.productionTip = false;
Vue.use(BootstrapVue);



 new Vue({
  el: '#app',
  render: h => h(App),
  router,
  components: { App },
  template: '<App/>',
});


