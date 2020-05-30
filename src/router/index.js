import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Login from '../views/Login.vue'
import Projects from '../views/Projects.vue'
import Faq from '../views/Faq.vue'
import Profile from '../views/Users/Profile.vue'
import AddProject from '../views/Users/AddProject.vue'
import EditItem from '../views/Users/EditItem.vue'
import CreateProfile from '../views/Users/CreateProfile.vue'
import ProjectDetails from '../views/ProjectDetails.vue'
import '../Database'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/Projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/ProjectDetails/:id',
    name: 'ProjectDetails',
    component: ProjectDetails
  },
  {
    path: '/Faq',
    name: 'Faq',
    component: Faq
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/CreateProfile',
    name: 'CreateProfile',
    component: CreateProfile
  },
  {
    path: '/Profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/AddProject',
    name: 'AddProject',
    component: AddProject
  },
  {
    name: 'Edit',
    path: '/Edit/:id',
    component: EditItem,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
