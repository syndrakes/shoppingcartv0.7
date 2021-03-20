import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import VueRouter from 'vue-router'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

Vue.use(VueRouter);
import Yonetim from './views/Yonetim.vue'
import Market from './views/Market.vue'
import Sepet from './views/Sepet.vue'
import Cuzdan from './components/Cuzdan.vue'
import Stok from './components/Stok.vue'


const router = new VueRouter({
  routes: [
    {
      path: '/yonetim',
      component: Yonetim,
      children: [
        {
        path: '/stok',
        name: "stok",
        component: Stok
        },
        {
        path: '/cuzdan',
        name: "cüzdan",
        component: Cuzdan
        }
      ]
    },
    { path: '/market',
     component: Market
    },
    { path: '/sepet',
     component: Sepet
    }
  ],
  mode: 'history'
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
