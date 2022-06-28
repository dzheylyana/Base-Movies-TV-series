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
    console.log(dataWithResults)
    context.commit('setTopMovies', dataWithResults.results)
  },

  async fetchTvSeries (context) {
    const seriesRes = await fetch(
      'https://api.themoviedb.org/3/tv/top_rated?api_key=ee88adc573d83253683533632b391538'
    )
    if (!seriesRes.ok) throw Error
    const dataWithSeries = await seriesRes.json()
    console.log(dataWithSeries)
    context.commit('setSeries', dataWithSeries.results)
  }

}
