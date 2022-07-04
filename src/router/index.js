import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../pages/MainPage.vue'
import FilmDetails from '../pages/FilmDetails.vue'
// import LoadActors from '../components/LoadActors.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: MainPage },
    { path: '/movie/:id', name: 'details', component: FilmDetails, props: true },
    { path: '/tv/:id', name: 'tvdetails', component: FilmDetails, props: true },
    { path: '/movie/:id/credits', name: 'actors', component: FilmDetails, props: true }

  ]
})

export default router
