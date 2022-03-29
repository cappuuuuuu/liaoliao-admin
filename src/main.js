import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
// ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// Vee-Validate
import { ValidationProvider } from 'vee-validate'
import './validator'

// Pinia
import { createPinia, PiniaVuePlugin } from 'pinia'

// Tailwind CSS
import './index.css'

Vue.use(ElementUI)
Vue.use(PiniaVuePlugin)
Vue.component('ValidationProvider', ValidationProvider)
Vue.config.productionTip = false

const pinia = createPinia()

new Vue({
  router,
  pinia,
  render: h => h(App)
}).$mount('#app')
