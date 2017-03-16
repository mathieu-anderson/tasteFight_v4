<template lang="html">
  <div class="searchMovie">
    <form @submit.prevent="onSubmit">
        <input
        type="text"
        placeholder="a movie to argue about"
        :value="movieName"
        @input="setMovieName">
        <input
        type="submit"
        value="👊"
        @keyup.enter="submit">
    </form>
    <br />
    <Scale v-show="loading"></Scale>
    <ChooseMovie v-show="movieList"></ChooseMovie>
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
      mapState([
        'TMDB_API_KEY',
        'movieList',
        'movieName'
      ]),
    methods: {
      setMovieName: function (e) {
        this.$store.commit('setMovieName', e.target.value)
      },
      onSubmit: function () {
        this.$store.commit('setMovieList', null)
        this.loading = true
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.TMDB_API_KEY}&language=en-US&query=${this.movieName}&page=1&include_adult=false`)
          .then(res => {
            const movieList = res.data.results.slice(0, 5)
            if (movieList.length === 0) {
              alert('nothing found :(')
              this.loading = false
              this.$store.commit('setMovieName', '')
            } else {
              this.$store.commit('setMovieList', movieList)
              this.loading = false
              this.showMovieList = true
            }
          })
          .catch(err => {
            this.$store.commit('setMovieName', '')
            this.$router.push('/')
          })
      }
    }
  }
</script>

<style lang="css">
input {
  font-size: 2em;
}
</style>
