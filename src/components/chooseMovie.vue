<template lang="html">
  <div class="">
    <searchMovie></searchMovie>
    <span class="">Did you mean ...</span>
      <br />
      <br />
      <span
        class="pointer"
        v-for="movie in movieList"
        @click="chooseMovie(movie.id)">
          <i>{{movie.original_title}}</i>
          ({{movie.release_date.slice(0,4)}})
          <br />
          <br />
      </span>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import searchMovie from '@/components/searchMovie'

  export default {
    name: 'chooseMovie',
    components: {
      searchMovie
    },
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
