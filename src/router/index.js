import Vue from 'vue'
import Router from 'vue-router'
import searchMovie from '@/components/searchMovie'
import chooseMovie from '@/components/chooseMovie'
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
      path: '/search/:id',
      name: 'chooseMovie',
      component: chooseMovie
    },
    {
      path: '/movie/:id',
      name: 'seeMovie',
      component: seeMovie
    }
  ]
})
