import Vue from 'vue'
import Router from 'vue-router'
import searchMovie from '@/components/searchMovie'
import chooseMovie from '@/components/chooseMovie'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: searchMovie
    },
    {
      path: '/which-one',
      name: 'chooseMovie',
      component: chooseMovie
    }
  ]
})
