import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from './views/public/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('./views/public/Home.vue')
  },
  {
    path: '/aboutUs',
    name: 'About Us',
    component: () => import('./views/public/AboutUs.vue')
  },
  {
    path: '/services',
    name: 'Services',
    component: () => import('./views/public/Services.vue')
  },
  {
    path: '/prices',
    name: 'Prices',
    component: () => import('./views/public/Prices.vue')
  },
  {
    path: '/stock',
    name: 'Stock',
    component: () => import('./views/public/Stock.vue')
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: () => import('./views/public/Contacts.vue')
  },
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
