export default {
  async fetchData (context) {
    const res = await fetch(
      'https://api.themoviedb.org/3/movie/now_playing?api_key=ee88adc573d83253683533632b391538'
    )
    if (!res.ok) throw Error
    const resData = await res.json()
    context.commit('SET_MOVIES', resData.results)
  },
  async fetchTopMovies (context, payload) {
    const movieRes = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=ee88adc573d83253683533632b391538&page=${payload.currentPage}`
    )
    if (!movieRes.ok) throw Error
    const dataWithResults = await movieRes.json()
    context.commit('SET_TOP_MOVIES', dataWithResults.results)
  },

  async fetchSearchResults (context, payload) {
    const searchRes = await fetch(
      `https://api.themoviedb.org/3/search/multi?api_key=ee88adc573d83253683533632b391538&query=${payload.query}`
    )
    if (!searchRes.ok) throw Error
    const dataFromSearch = await searchRes.json()
    context.commit('SET_SEARCH', dataFromSearch.results)
  },

  async loadMovieDetails (context, payload) {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${payload.id}?api_key=ee88adc573d83253683533632b391538`
    )
    if (!response.ok) throw Error
    const dataResponse = await response.json()
    context.commit('SET_DETAILS', dataResponse)
  },

  async loadActors (context, payload) {
    const actorsRes = await fetch(
      `https://api.themoviedb.org/3/movie/${payload.id}/credits?api_key=ee88adc573d83253683533632b391538`
    )
    if (!actorsRes.ok) throw Error
    const dataWithActors = await actorsRes.json()
    context.commit('SET_ACTORS', dataWithActors.cast)
  },
  async loadMovieImages (context, payload) {
    const imagesRes = await fetch(
      `https://api.themoviedb.org/3/movie/${payload.id}/images?api_key=ee88adc573d83253683533632b391538`
    )
    if (!imagesRes.ok) throw Error
    const dataWithImages = await imagesRes.json()
    context.commit('SET_IMAGES', dataWithImages.backdrops
    )
  },
  async loadSimilarMovies (context, payload) {
    const similarMovieRes = await fetch(
      `https://api.themoviedb.org/3/movie/${payload.id}/similar?api_key=ee88adc573d83253683533632b391538`
    )
    if (!similarMovieRes.ok) throw Error
    const similarMovies = await similarMovieRes.json()
    context.commit('SET_SIMILAR_MOVIES', similarMovies.results
    )
  },
  fetchMovieDetails: ({ dispatch }, payload) => {
    const list = [
      dispatch('loadMovieDetails', payload),
      dispatch('loadActors', payload),
      dispatch('loadMovieImages', payload),
      dispatch('loadSimilarMovies', payload)

    ]
    return Promise.allSettled(list)
  }

}
