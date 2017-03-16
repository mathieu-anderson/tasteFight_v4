<template lang="html">
  <div class="">
    <h2>Did you mean ...</h2>
    <span
      class="pointer"
      v-for="movie in movieList"
      @click="chooseMovie(movie.id)">
        <i>{{movie.original_title}}</i>
        <span v-if="movie.release_date">({{movie.release_date.slice(0,4)}})</span>
        <span v-else>(release date unknown)</span>
        <br />
        <br />
    </span>
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
        this.$router.push(`/movie/${this.movieChoiceID}`)
      }
    }
  }

</script>

<style lang="css">
</style>
