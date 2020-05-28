import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import { rtdbPlugin } from 'vuefire'

Vue.use(rtdbPlugin)
Vue.use(require('vue-moment'));

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
