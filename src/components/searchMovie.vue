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
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import axios from 'axios'

  export default {
    name: 'searchMovie',
    data () {
      return {
        movie_name: ''
      }
    },
    computed:
// mapState gets the state values in the store, like $store.state.value
      mapState([
        'TMDB_API_KEY',
        'movieList'
      ]),
    methods: {
// onSubmit calls TMDB API and get the first 5 results, then redirects to the list to let the user choose what he meant
      onSubmit: function () {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.TMDB_API_KEY}&language=en-US&query=${this.movie_name}&page=1&include_adult=false`)
          .then(res => {
            const movieList = res.data.results.slice(0, 5)
            if (movieList.length === 0) {
              alert('nothing found :(')
              this.movie_name = ''
            } else {
// this is where I want to send movieList to $store.state.movieList
              this.$store.commit('setMovieList', movieList)
              this.$router.push('/which-one')
            }
          })
          .catch(err => {
            this.movie_name = ''
            this.$router.push('/')
          })
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
