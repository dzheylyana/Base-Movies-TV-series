import mutations from './mutations'
import actions from './actions.js'
import getters from './getters.js'

export default {
  namespaced: true,
  state () {
    return {
      tvSeries: [],
      seriesDetails: [],
      isReady: false,
      actorsTvInfo: [],
      tvImage: [],
      similarSeries: []

    }
  },
  mutations,
  actions,
  getters
}
