import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

// Vee-Validate
import { ValidationProvider } from 'vee-validate'
import './validator'

// Pinia
import { createPinia, PiniaVuePlugin } from 'pinia'

// Vuesax
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css' // Vuesax styles
import 'boxicons/css/boxicons.min.css'// Vuesax Icon use boxicons

// Tailwind CSS
import './index.css'

Vue.use(PiniaVuePlugin)
Vue.use(Vuesax)
Vue.component('ValidationProvider', ValidationProvider)
Vue.config.productionTip = false

new Vue({
  router,
  pinia: createPinia(),
  render: h => h(App)
}).$mount('#app')
