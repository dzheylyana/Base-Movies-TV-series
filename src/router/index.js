import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../pages/MainPage.vue'
import FilmDetails from '../pages/FilmDetails.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: MainPage },
    { path: '/r', component: FilmDetails }

  ]
})

export default router
