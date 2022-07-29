import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Pesan from '../views/pesan.vue'
import Jual from '../views/jual.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/pesan',
    name: 'Pesan',
    component: Pesan
  },
  {
    path: '/jual',
    name: 'Jual',
    component: Jual
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
