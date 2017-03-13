<template lang="html">
  <div class="">
    <span class="">Did you mean ...</span>
      <br />
      <br />
        <span
          class="pointer"
          v-for="movie in movieList"
          v-on:click="onChoosing(movie.original_title, movie.release_date.slice(0,4))">
            <i>{{movie.original_title}}</i>
            ({{movie.release_date.slice(0,4)}})
            <br />
            <br />
        </span>
        <span v-on:click="reload()" class="pointer">↵</span>

  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import axios from 'axios'

  export default {
    name: 'chooseMovie',
    data () {
      return {
        poster_base_url: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/'
      }
    },
    computed:
// mapState gets the state values in the store
      mapState([
        'TMDB_API_KEY',
        'movieList'
      ]),
    methods: {
      onChoosing: function (movieTitle, movieDate) {
        const movieyear = movieDate.slice(0, 4)
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.TMDB_API_KEY}&language=en-US&query=${movieTitle}&page=1&include_adult=false&year=${movieyear}`)
        .then(res => {
// more mutations to commit to the state
          this.api_res_poster = this.poster_base_url + res.data.results[0].poster_path
          this.api_res_name = res.data.results[0].original_title
          this.api_res_overview = res.data.results[0].overview
          this.api_res_ID = res.data.results[0].id
        })
        .then(
          this.$router.push('/rate-it')
        )
        .catch(err => this.reload())
      },
      reload: function () {
        this.$store.commit('setMovieList', [])
        this.$router.push('/')
      }
    }
  }

</script>

<style lang="css">
</style>
