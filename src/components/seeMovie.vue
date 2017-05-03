<template lang="html">
  <div>
    <Scale v-show="loading" :color="'#2c3e50'"></Scale>
    <div class="container" v-if="!loading">
      <span class="poster">
        <img :src='posterURL'>
      </span>
      <span class="text">
        <h2><i>{{movieData.original_title}}</i> ({{movieData.release_date.slice(0,4)}})</h2>
        <p>{{movieData.overview}}</p>
        <Rating v-if="showRating" class="rating"></Rating>
      </span>
    </div>
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
      'movieData',
      'myMovieRating'
    ]),
  created:
    function loadMovieData () {
      this.loading = true
      const posterBaseURL = 'https://image.tmdb.org/t/p/w300_and_h450_bestv2'
      axios.get(`https://api.themoviedb.org/3/movie/${this.movieID}?api_key=${process.env.API_KEY}&language=en-US`)
      .then(res => {
        return new Promise((resolve, reject) => {
          const poster = document.createElement('img')
          if (!res.data.poster_path) {
            poster.src = 'http://placehold.it/350x450'
            this.showRating = true
            resolve(res)
          } else {
            poster.src = posterBaseURL + res.data.poster_path
            poster.onload = () => {
              this.showRating = true
              resolve(res)
            }
          }
        })
      })
      .then(res => {
        this.loading = false
        this.$store.commit('setMovieData', res.data)
        if (!res.data.poster_path) {
          this.posterURL = 'http://placehold.it/350x450'
        } else {
          this.posterURL = posterBaseURL + res.data.poster_path
        }
      })
      .catch(res => {
        this.$router.push('/')
      })
    }
}
</script>

<style lang="css">
.container {
  display: flex;
  margin-left: 10vw;
  margin-right: 10vw;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
}
.poster {
  flex: 1;
}
.text {
  padding: 0.5em;
  flex: 1 1 30vw;
}
.rating{
  flex: 1 0 100vw;
  justify-content: center;
}
</style>
