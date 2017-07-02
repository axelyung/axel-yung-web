import Vue from 'vue';
import App from 'App';
import SvgIcon from 'vue-svgicon';
import router from './router.js'

Vue.use(SvgIcon, {
  tagName: 'svg-icon'
})

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
})
