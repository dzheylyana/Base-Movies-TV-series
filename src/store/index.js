import { createStore } from 'vuex'

// import coachesModule from './modules/coaches/index.js';
import moviesModule from './modules/movies/index.js'
import seriesModule from './modules/series/index.js'

const store = createStore({
  modules: {
    movies: moviesModule,
    series: seriesModule
  }
})

export default store
