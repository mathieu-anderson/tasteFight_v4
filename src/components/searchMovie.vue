<template lang="html">
  <div class="searchMovie">
    <form v-on:submit.prevent="onSubmit">
        <input
        type="text"
        placeholder="a movie to argue about"
        v-model="movie_name">
        <input
        type="submit"
        value="👊"
        v-on:keyup.enter="submit">
    </form>
    Clicked: {{ $store.state.count }} times, count is {{ evenOrOdd }}.
    <button @click="$store.dispatch('increment')">+</button>
    <button @click="$store.dispatch('decrement')">-</button>
    <button @click="$store.dispatch('incrementIfOdd')">Increment if odd</button>
    <button @click="$store.dispatch('incrementAsync')">Increment async</button>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import axios from 'axios'

  export default {
    name: 'searchMovie',
    data () {
      return {
        movie_name: '',
        TMDB_api_key: '3afb334973093028cc5d28d0464b6383',
        api_res_movie_list: ''
      }
    },
    computed: mapGetters([
      'evenOrOdd'
    ]),
    methods: {
      onSubmit: function () {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.TMDB_api_key}&language=en-US&query=${this.movie_name}&page=1&include_adult=false`)
          .then(res => {
            const movieList = res.data.results.slice(0, 5)
            if (movieList.length === 0) {
              alert('nothing found :(')
              this.movie_name = ''
            } else {
              this.api_res_movie_list = movieList
              this.$router.push('/which-one')
            }
          })
          .catch((err) => this.reload())
      }
    }
  }
</script>

<style lang="css">
h1 {
  font-size: 4em;
  font-weight: bold;
text-shadow: 1px 1px 4px rgba(150, 150, 150, 0.98);
cursor: pointer;
}
input {
  font-size: 2em;
}
</style>
