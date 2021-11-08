import Vue from 'vue'
import App from './App.vue'
import VueLazyload from "./modules/vue-lazy-load";

Vue.config.productionTip = false

Vue.use(VueLazyload,{
  loading:'http://localhost:3000/images/circle/icon.png',
  error:'http://localhost:3000/images/goods/default.png',
  preload:1,
})

new Vue({
  render: h => h(App),
}).$mount('#app')
