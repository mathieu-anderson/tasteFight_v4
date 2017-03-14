<template lang="html">
  <div class="">
    <span class="">Did you mean ...</span>
      <br />
      <br />
        <span
          class="pointer"
          v-for="movie in movieList"
          v-on:click="chooseMovie(movie.id)">
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

  export default {
    name: 'chooseMovie',
    data () {
      return {
        movieChoiceID: null
      }
    },
    computed:
      mapState([
        'movieList'
      ]),
    methods: {
      chooseMovie: function (movieID) {
        this.movieChoiceID = movieID
        this.$router.push(`/rate-it/${this.movieChoiceID}`)
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
