import Vue from 'vue'
import Router from 'vue-router'
import searchMovie from '@/components/searchMovie'
import seeMovie from '@/components/seeMovie'

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
    }
  ]
})
