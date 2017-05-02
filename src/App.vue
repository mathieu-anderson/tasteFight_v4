<template>
  <div id="app">
    <AppNav></AppNav>
    <br>
    <br>
    <br>
    <br>
    <br>
    <router-view></router-view>
  </div>
</template>

<script>
  import AppNav from '@/components/appNav'

  export default {
    name: 'app',
    components: {
      AppNav
    },
    methods: {
      resetApp: function () {
        this.$store.commit('setMovieList', [])
        this.$store.commit('setMovieName', '')
        this.$store.commit('setMovieData', {})
        this.$store.commit('setMyMovieRating', null)
        this.$router.push('/')
      }
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0;
  padding: 0;
}
</style>
