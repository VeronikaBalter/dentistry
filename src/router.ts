import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from './views/public/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
  {
    path: '/login',
    name: 'Login',
    component: () => import('./views/public/LogIn.vue')
  },
  {
    path: '/patients',
    name: 'Patients',
    component: () => import('./views/doctor/Patients.vue')
  },
  {
    path: '/patientProfile',
    name: 'PatientProfile',
    component: () => import('./views/doctor/PatientProfile.vue')
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
