<template lang="html">
  <div class="searchMovie">
    <form @submit.prevent="onSubmit">
        <input
        type="text"
        placeholder="a movie to argue about"
        @input="setMovieName">
        <input
        type="submit"
        value="👊"
        @keyup.enter="submit">
    </form>
    <br />
    <br />
    <Scale v-show="loading"></Scale>
    <ChooseMovie v-show="movieName"></ChooseMovie>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import axios from 'axios'
  import Scale from 'vue-spinner/src/ScaleLoader.vue'
  import ChooseMovie from '@/components/chooseMovie'

  export default {
    name: 'searchMovie',
    components: {
      Scale,
      ChooseMovie
    },
    data () {
      return {
        loading: false
      }
    },
    computed:
// mapState gets the state values in the store, like $store.state.value
      mapState([
        'TMDB_API_KEY',
        'movieList',
        'movieName'
      ]),
    methods: {
      setMovieName: function (e) {
        this.$store.commit('setMovieName', e.target.value)
      },
// onSubmit calls TMDB API and get the first 5 results, then redirects to the list to let the user choose what he meant
      onSubmit: function () {
        // this.$store.commit('setMovieName', '')
        this.loading = true
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.TMDB_API_KEY}&language=en-US&query=${this.movieName}&page=1&include_adult=false`)
          .then(res => {
            // const movieName = this.movie_name
            const movieList = res.data.results.slice(0, 5)
            if (movieList.length === 0) {
              alert('nothing found :(')
              this.$store.commit('setMovieName', '')
              // this.movie_name = ''
            } else {
              // this.$store.commit('setMovieName', movieName)
              this.$store.commit('setMovieList', movieList)
              this.loading = false
            }
          })
          .catch(err => {
            // this.movie_name = ''
            this.$store.commit('setMovieName', '')
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
