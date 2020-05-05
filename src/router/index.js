import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Login from '../views/auth/Login.vue'
import Projects from '../views/Projects/Projects.vue'
import Faq from '../views/Faq.vue'
import '../Database'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/Projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/Faq',
    name: 'Faq',
    component: Faq
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
