import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/Landing'
import Intro from '@/components/Intro'
import Portrait from '@/components/Portrait'
import LeFur from '@/components/Le-fur'
import Jeremiasz from '@/components/Jeremiasz'
import Select from '@/components/Select'
import About from '@/components/About'

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
      path: '/portrait/',
      name: 'Portrait',
      component: Portrait,
      children: [
        {
          path: 'le-fur',
          component: LeFur
        },
        {
          path: 'jeremiasz',
          component: Jeremiasz
        }
      ]
    }, {
      path: '/jeremiasz',
      name: 'Jeremiasz',
      component: Jeremiasz
    }, {
      path: '/select',
      name: 'Select',
      component: Select
    }, {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
