<template lang="html">
  <div>
    <Scale v-show="loading"></Scale>
    <div v-show="!loading">
      <h2>{{movieData.original_title}}</h2>
      <img :src='posterURL'>
      <p>{{movieData.overview}}</p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import axios from 'axios'
import Scale from 'vue-spinner/src/ScaleLoader.vue'

export default {
  name: 'seeMovie',
  components: {
    Scale
  },
  data () {
    return {
      loading: false,
      movieID: this.$route.params.id,
      movieData: {},
      posterURL: ''
    }
  },
  computed:
    mapState([
      'TMDB_API_KEY'
    ]),
  created:
    function loadMovieData () {
      this.loading = true
      const posterBaseURL = 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/'
      axios.get(`https://api.themoviedb.org/3/movie/${this.movieID}?api_key=${this.TMDB_API_KEY}&language=en-US`)
      .then(res => {
        this.movieData = res.data
        this.posterURL = posterBaseURL + res.data.poster_path
      })
      .then(res => {
        this.loading = false
        // setTimeout(function () {
        //   this.loading = false
        // }, 1000)
      })
    }
}
</script>

<style lang="css">
</style>
