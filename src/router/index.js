import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../pages/MainPage.vue'
import FilmDetails from '../pages/FilmDetails.vue'
// import LoadDetails from '../components/LoadDetails.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: MainPage },
    { path: '/movie/:id', name: 'details', component: FilmDetails, props: true, meta: { isMovie: true } },
    { path: '/tv/:id', name: 'tvdetails', component: FilmDetails, props: true, meta: { isMovie: false } }

  ]
})

export default router
