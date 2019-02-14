import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/nba',
      name: 'nba',
      component: () => import('./views/catagory/Nba.vue')
    },
    {
      path: '/play/:id',
      name: 'play',
      component: () => import('./components/PlayPage.vue')
    }
  ]
})