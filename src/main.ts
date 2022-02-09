import Vue from 'vue';
import App from './App.vue';
import router from './router';
import i18n from './i18n';
import './styles/app.scss';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import { Datetime } from 'vue-datetime';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'vue-datetime/dist/vue-datetime.css'

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(require('vue-moment'));
Vue.component('datetime', Datetime);

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app');
