import Vue from 'vue'
import VueRouter from 'vue-router'
import MSite from '../pages/msite/MSite'
import Order from '../pages/order/Order'
import Profile from '../pages/profile/Profile'
import Search from '../pages/search/Search'
import Login from '../pages/login/Login'

//声明使用路由插件
Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/msite',
      component: MSite,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/',
      redirect: '/msite'
    },
    {
      path: '/login',
      component: Login
    }
  ]
})
