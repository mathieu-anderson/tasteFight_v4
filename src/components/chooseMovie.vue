<template lang="html">
  <div class="api_res_list Aligner">
    <span class="big Aligner-item">Did you mean ...</span>
      <br />
      <br />
        <span
          class="pointer Aligner-item"
          v-for="movie in api_res_movie_list"
          v-on:click="onChoosing(movie.original_title, movie.release_date)">
            <i>{{movie.original_title}}</i>
            ({{movie.release_date[0]}}{{movie.release_date[1]}}{{movie.release_date[2]}}{{movie.release_date[3]}})
            <br />
            <br />
        </span>
    <span v-on:click="reload()" class="big pointer">↵</span>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'chooseMovie',
    data () {
      return {
        TMDB_api_key: '3afb334973093028cc5d28d0464b6383',
        api_res_name: '',
        api_res_overview: '',
        api_res_poster: '',
        api_res_ID: '',
        poster_base_url: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/'
      }
    },
    methods: {
      onChoosing: function (movieTitle, movieDate) {
        const movieyear = movieDate.slice(0, 4)
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.TMDB_api_key}&language=en-US&query=${movieTitle}&page=1&include_adult=false&year=${movieyear}`)
        .then(res => {
          this.api_res_poster = this.poster_base_url + res.data.results[0].poster_path
          this.api_res_name = res.data.results[0].original_title
          this.api_res_overview = res.data.results[0].overview
          this.api_res_ID = res.data.results[0].id
        })
        .then(res => {
          this.showList = false
          this.showRate = true
          this.showAPIRes = true
          this.showMyrating = true
        })
        .catch(err => this.reload())
      },
      reload: function () {
        this.$router.push('/')
      }
    }
  }

</script>

<style lang="css">

.title {
  font-style: italic;
  font-weight: bolder;
  font-size: 18pt;
}

.wrapper {
    margin-left: 20vw;
    margin-right: 20vw;
    display: -ms-inline-flexbox;
    display: -webkit-inline-flex;
    display: inline-flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-flex-wrap: nowrap;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-align-content: center;
    -ms-flex-line-pack: center;
    align-content: center;
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    align-items: flex-start;
    }

.aside {
    max-height: 50vh;
    -webkit-order: 0;
    -ms-flex-order: 0;
    order: 0;
    -webkit-flex: 0 1 auto;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    -webkit-align-self: auto;
    -ms-flex-item-align: auto;
    align-self: auto;
    }

.main {
    width: 30vw;
    text-align: left;
    padding-left: 2vw;
    -webkit-order: 0;
    -ms-flex-order: 0;
    order: 0;
    -webkit-flex: 0 1 auto;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    -webkit-align-self: auto;
    -ms-flex-item-align: auto;
    align-self: auto;
    }

.aligner {
  display: flex;
  align-items: center;
  justify-content: center;
}

.aligner-item {
  max-width: 50%;
}

ul  {
  list-style: none;
}

</style>
