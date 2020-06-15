import Vue from 'vue'
import Router from 'vue-router'
import Listagem from './components/Listagem'
import Cadastro from './components/Cadastro'
import Editar from './components/Editar'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
        name: 'listagem',
        path: '/listagem',
        component: Listagem
    },{
        name: 'cadastro',
        path: '/cadastro',
        component: Cadastro
    },{
        name: 'editar',
        path: '/editar/:id',
        component: Editar,
        props: true
    },{
        path: '/',
        redirect: {name: 'listagem'}
    }]
})