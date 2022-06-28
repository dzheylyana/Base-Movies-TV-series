import { createStore } from 'vuex'

// import coachesModule from './modules/coaches/index.js';
import requestsModule from './modules/requests/index.js'

const store = createStore({
  modules: {
    requests: requestsModule
  }
})

export default store
