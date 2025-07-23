import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import AboutPage from '@/pages/AboutPage.vue'
import ServicesPage from '@/pages/ServicesPage.vue'
import CaseStudiesPage from '@/pages/CaseStudiesPage.vue'
import InsightsPage from '@/pages/InsightsPage.vue'
import ContactPage from '@/pages/ContactPage.vue'
import LoginPage from '@/pages/LoginPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage
  },
  {
    path: '/services',
    name: 'Services',
    component: ServicesPage
  },
  {
    path: '/case-studies',
    name: 'CaseStudies',
    component: CaseStudiesPage
  },
  {
    path: '/insights',
    name: 'Insights',
    component: InsightsPage
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactPage
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router