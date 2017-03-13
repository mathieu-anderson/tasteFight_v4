import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// Clicked: {{ $store.state.count }} times, count is {{ evenOrOdd }}.
// <button @click="$store.dispatch('increment')">+</button>
// <button @click="$store.dispatch('decrement')">-</button>
// <button @click="$store.dispatch('incrementIfOdd')">Increment if odd</button>
// <button @click="$store.dispatch('incrementAsync')">Increment async</button>

const state = {
  TMDB_API_KEY: '3afb334973093028cc5d28d0464b6383',
  movieList: []
}

// mutations are operations that actually mutates the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
  setMovieList (state, list) {
    state.movieList = list
  }
  // increment (state) {
  //   state.count++
  // },
  // decrement (state) {
  //   state.count--
  // }
}

// actions are functions that causes side effects and can involve
// asynchronous operations.
const actions = {
  setMovieList: ({ commit }) => commit('setMovieList')
  // increment: ({ commit }) => commit('increment'),
  // decrement: ({ commit }) => commit('decrement'),
  // incrementIfOdd ({ commit, state }) {
  //   if ((state.count + 1) % 2 === 0) {
  //     commit('increment')
  //   }
  // },
  // incrementAsync ({ commit }) {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       commit('increment')
  //       resolve()
  //     }, 1000)
  //   })
  // }
}

// getters are functions
const getters = {
  // evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd'
}

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
