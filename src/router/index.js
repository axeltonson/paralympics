import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/Landing'
import Intro from '@/components/Intro'
import Portrait from '@/components/Portrait'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    }, {
      path: '/intro',
      name: 'Intro',
      component: Intro
    }, {
      path: '/portrait/:id',
      name: 'Portrait',
      component: Portrait
    }
  ]
})
