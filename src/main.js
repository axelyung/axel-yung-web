import Vue from 'vue'
import App from 'App'
import SvgIcon from 'vue-svgicon'
import router from './router.js'
import mixins from './mixins.js'

Vue.use(SvgIcon, {
  tagName: 'svg-icon'
})

Vue.mixin(mixins)

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
})

