import Vue from 'vue'
import App from './App.vue'
import './index.css'
import Toasted from 'vue-toasted';
Vue.use(Toasted, {
  duration: 1500,
  position: 'top-right',
  theme: 'bubble',
  iconPack: 'callback'
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
