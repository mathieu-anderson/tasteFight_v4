<template lang="html">
<div>
  <p>
    Your rating : {{this.myMovieRating}}
    <br />
    <button type="button" name="button" @click="goToHome">Again?</button>
  </p>
  <p>
    {{this.movieData.vote_count}} people's average rating : {{this.movieData.vote_average}}
    <br />
    <a :href="url"><button type="button" name="button" v-show="!compareRatings">argue 👊</button></a>
    <a :href="url"><button type="button" name="button" v-show="compareRatings">agree 👍</button></a>
  </p>
  <p>
    {randomProfileName}'s rating : {randomProfileName.movieID.rating}
    </br>
    (it's really different from yours!)
    <br />
    <button type="button" name="button">argue 👊</button>
  </p>
  <p>
    {randomProfileName}'s rating : {randomProfileName.movieID.rating}
    </br>
    (it's really close to yours!)
    <br />
    <button type="button" name="button">agree 👍</button>
  </p>
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
      this.$store.commit('setMovieList', null)
      this.$store.commit('setMovieName', null)
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
</style>
