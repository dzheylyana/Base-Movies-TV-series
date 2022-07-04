export default {
  async fetchTvSeries (context) {
    const seriesRes = await fetch(
      'https://api.themoviedb.org/3/tv/top_rated?api_key=ee88adc573d83253683533632b391538'
    )
    if (!seriesRes.ok) throw Error
    const dataWithSeries = await seriesRes.json()
    context.commit('setSeries', dataWithSeries.results)
  },
  async loadSeriesDetails (context, payload) {
    const seriesResponse = await fetch(
      `https://api.themoviedb.org/3/tv/${payload.id}?api_key=ee88adc573d83253683533632b391538`
    )
    if (!seriesResponse.ok) throw Error
    const dataSeriesResponse = await seriesResponse.json()
    context.commit('seriesDetails', dataSeriesResponse)
  },
  async loadTvActors (context, payload) {
    const actorstvRes = await fetch(
      `https://api.themoviedb.org/3/tv/${payload.id}/credits?api_key=ee88adc573d83253683533632b391538`
    )
    if (!actorstvRes.ok) throw Error
    const dataWithTvActors = await actorstvRes.json()
    context.commit('setTvActors', dataWithTvActors)
  }

}
