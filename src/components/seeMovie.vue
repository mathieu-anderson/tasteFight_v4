<!-- BUG TO FIX
when no res.data.poster_path is found ('null'), nothing is displayed -->

<template lang="html">
  <div>
    <Scale v-show="loading"></Scale>
    <div v-show="!loading">
      <h2>{{movieData.original_title}}</h2>
      <img :src='posterURL'>
      <p>{{movieData.overview}}</p>
    </div>
    <Rating v-if="showRating"></Rating>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import axios from 'axios'
import Scale from 'vue-spinner/src/ScaleLoader.vue'
import Rating from '@/components/rating'

export default {
  name: 'seeMovie',
  components: {
    Scale,
    Rating
  },
  data () {
    return {
      loading: false,
      showRating: false,
      movieID: this.$route.params.id,
      posterURL: ''
    }
  },
  computed:
    mapState([
      'TMDB_API_KEY',
      'movieData',
      'myMovieRating'
    ]),
  created:
    function loadMovieData () {
      const posterBaseURL = 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/'
      this.loading = true
      axios.get(`https://api.themoviedb.org/3/movie/${this.movieID}?api_key=${this.TMDB_API_KEY}&language=en-US`)
      .then(res => {
        return new Promise((resolve, reject) => {
          const poster = document.createElement('img')
          poster.src = posterBaseURL + res.data.poster_path
          poster.onload = () => {
            this.showRating = true
            resolve(res)
          }
        })
      })
      .then(res => {
        this.loading = false
        this.$store.commit('setMovieData', res.data)
        this.posterURL = posterBaseURL + res.data.poster_path
      })
      .catch(res => {
        this.$router.push('/')
      })
    }
}
</script>

<style lang="css">
</style>
