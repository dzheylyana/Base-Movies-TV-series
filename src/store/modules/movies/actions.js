export default {
  async fetchData (context) {
    const res = await fetch(
      'https://api.themoviedb.org/3/movie/now_playing?api_key=ee88adc573d83253683533632b391538'
    )
    if (!res.ok) throw Error
    const resData = await res.json()
    context.commit('setMovies', resData.results)
  },
  async fetchTopMovies (context) {
    const movieRes = await fetch(
      'https://api.themoviedb.org/3/movie/top_rated?api_key=ee88adc573d83253683533632b391538'
    )
    if (!movieRes.ok) throw Error
    const dataWithResults = await movieRes.json()
    context.commit('setTopMovies', dataWithResults.results)
  },

  async fetchSearchResults (context) {
    const searchRes = await fetch(
      'https://api.themoviedb.org/3/search/multi?api_key=ee88adc573d83253683533632b391538&query=outside+the+wire&page=1'
    )
    if (!searchRes.ok) throw Error
    const dataFromSearch = await searchRes.json()
    context.commit('setSearch', dataFromSearch.results)
  },

  async loadMovieDetails (context, payload) {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${payload.id}?api_key=ee88adc573d83253683533632b391538`
    )
    if (!response.ok) throw Error
    const dataResponse = await response.json()
    context.commit('loadDetails', dataResponse)
  },

  async loadActors (context, payload) {
    const actorsRes = await fetch(
      `https://api.themoviedb.org/3/movie/${payload.id}/credits?api_key=ee88adc573d83253683533632b391538`
    )
    if (!actorsRes.ok) throw Error
    const dataWithActors = await actorsRes.json()
    context.commit('setActors', dataWithActors)
  }

}
