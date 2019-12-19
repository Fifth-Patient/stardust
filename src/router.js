import Vue from 'vue'
import VueRouter from 'vue-router'
import SkillLayout from './views/skill-layout.vue'
import Home from './views/Home.vue'


Vue.use(VueRouter)

const defaultRouters = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
  }
]

const skillRouter = {
  path: '/skill',
  name: 'skill-views',
  component: SkillLayout,
  children: [
    {
      path: 'ref-with-if',
      name: 'ref-with-if',
      component: () => import('./views/skill/ref-with-if')
    }
  ]
}

const router = new VueRouter({
  mode: 'history',
  routes: [
    ...defaultRouters,
    skillRouter
  ]
})

export default router
