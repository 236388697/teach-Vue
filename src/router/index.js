import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index/index'
import Palace from '@/page/palace/palace'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/palace',
      name: 'Palace',
      component: Palace
    }
  ]
})
