import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import create from '../components/create.vue'
import edit from '../components/edit.vue'
import list from '../components/list.vue'
import register from '../components/register'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'register',
    component: register
  },

  {
    path: '/create',
    name: 'create',
    component: create
  },

  {
    path: '/edit',
    name: 'edit',
    component: edit
  },

  {
    path: '/list',
    name: 'list',
    component: list
  },
  

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
