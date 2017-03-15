import Vue from 'vue'
import Router from 'vue-router'
import searchMovie from '@/components/searchMovie'
import seeMovie from '@/components/seeMovie'
import results from '@/components/results'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: searchMovie
    },
    {
      path: '/movie/:id',
      name: 'seeMovie',
      component: seeMovie
    },
    {
      path: '/movie/:id/results',
      name: 'results',
      component: results
    }
  ]
})
