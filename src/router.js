import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/goodList',
      name: 'goodList',
      component: () => import('@c/goodList/GoodList.vue')
    },
    {
      path: '/detail',
      name: 'detail',
      component: () => import('@c/goodsdetail/GoodsDetail.vue')
    },
    {
      path:'/buy',
      name:'buy',
      component:()=>import('@c/buy/Buy.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('./views/Register.vue')
    }
  ]
})
