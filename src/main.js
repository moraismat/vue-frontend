import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Listagem from './components/Listagem'
import Cadastro from './components/Cadastro'

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
      {
        path: '/',
        redirect: '/Listagem',
      },
      {
        path: '/listagem',
        component: Listagem
      },
      {
        path: '/cadastro',
        component: Cadastro
      }
    ]
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
