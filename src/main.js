import favicon from './assets/favicon/favicon.ico'
import stylesheet from '../sass/main.scss'

import Vue from 'vue'
import App from 'App'
import SvgIcon from 'vue-svgicon'
import VeeValidate from 'vee-validate';
import BootstrapVue from 'bootstrap-vue';
 
import router from './router.js'
import mixins from './mixins.js'

Vue.use(SvgIcon, { tagName: 'svg-icon' })
Vue.use(VeeValidate);
Vue.use(BootstrapVue);
Vue.mixin(mixins)

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
})

