import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import { ValidationProvider } from 'vee-validate'
import './validator'
import 'element-ui/lib/theme-chalk/index.css'
import './index.css'

Vue.component('ValidationProvider', ValidationProvider)
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
