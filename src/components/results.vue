<template lang="html">
<div class="container">
  <div class="box1">
    <p>
      <h2>Your rating : {{this.myMovieRating}}</h2>
      (The best rating!)
      <br />
      <br />
      <button type="button" name="button" @click="goToHome">Again?</button>
    </p>
    <br />
    <p>
      <h2>{{this.movieData.vote_count}} people's rating : {{this.movieData.vote_average}}</h2>
      (Plebs!)
      <br />
      <br />
      <a :href="url"><button type="button" name="button" v-show="!compareRatings">argue 👊</button></a>
      <a :href="url"><button type="button" name="button" v-show="compareRatings">agree 👍</button></a>
    </p>
  </div>
  <div class="box2">
    <p>
      <h2>RandomPhilistine's rating : 1</h2>
      (it's really different from yours!)
      <br />
      <br />
      <button type="button" name="button">argue 👊</button>
    </p>
    <br />
    <p>
      <h2>RandomPersonOfTaste's rating : 10</h2>
      (it's really close to yours!)
      <br />
      <br />
      <button type="button" name="button">agree 👍</button>
    </p>
  </div>
</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'results',
  data () {
    return {
      url: `https://www.themoviedb.org/movie/${this.$route.params.id}`,
      compareRatings: null
    }
  },
  created:
    function authorize () {
      const movieID = this.$route.params.id
      if (!this.myMovieRating) {
        this.$router.push(`/movie/${movieID}`)
      }
    },
  mounted:
    function compareRatings () {
      const myRating = this.myMovieRating
      const TMDBRating = Math.round(this.movieData.vote_average)
      if (myRating === TMDBRating || myRating + 0.7 === TMDBRating || myRating - 0.7 === TMDBRating) {
        this.compareRatings = true
      }
    },
  computed:
    mapState([
      'movieData',
      'myMovieRating'
    ]),
  methods: {
    goToHome: function () {
      this.$store.commit('setMovieList', [])
      this.$store.commit('setMovieName', '')
      this.$store.commit('setMovieData', {})
      this.$store.commit('setMyMovieRating', null)
      this.$router.push('/')
    },
    goToTMDB: function () {

    }
  }
}
</script>

<style lang="css">
button{
  font-size: 1.5em;
}
.box1{
  padding-right: 2em;
}
</style>
