<template lang="html">
<div>
  <p>
    Your rating : {{this.myMovieRating}}
    <br />
    <button type="button" name="button" @click="goToHome">Again?</button>
  </p>
  <p>
    {{this.movieData.vote_count}} people's rating : {{this.movieData.vote_average}}
    <br />
    <button type="button" name="button">Argue with them!</button>
    <!-- <a :href="https://www.themoviedb.org/{{this.movieData.id}}"><button type="button" name="button">Argue with them!</button></a> -->
  </p>
  <p>
    {randomProfileName}'s rating : {randomProfileName.movieID.rating}
    <br />
    <button type="button" name="button">Argue with them!</button>
  </p>
</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'results',
  data () {
    return {
    }
  },
  created:
    function authorize () {
      const movieID = this.$route.params.id
      if (!this.myMovieRating) {
        this.$router.push(`/movie/${movieID}`)
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
</style>
