import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  TMDB_API_KEY: '3afb334973093028cc5d28d0464b6383',
  movieList: [],
  movieName: '',
  movieData: {},
  myMovieRating: null
}

const mutations = {
  setMovieList (state, list) {
    state.movieList = list
  },
  setMovieName (state, name) {
    state.movieName = name
  },
  setMovieData (state, data) {
    state.movieData = data
  },
  setMyMovieRating (state, rating) {
    state.myMovieRating = rating
  }
}

const actions = {
}

const getters = {
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
