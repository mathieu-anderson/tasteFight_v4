import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
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
