<template>
  <div id="app">
    <h1 @click="resetApp">tasteFight</h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    resetApp: function () {
      this.$store.commit('setMovieList', null)
      this.$store.commit('setMovieName', null)
      this.$store.commit('setMovieData', {})
      this.$store.commit('setMyMovieRating', null)
      this.$router.push('/')
    }
  }
}
</script>

<style>
.pointer {
  cursor: pointer;
}
h1 {
  font-size: 4em;
  font-weight: bold;
  text-shadow: 1px 1px 4px rgba(150, 150, 150, 0.98);
  cursor: pointer;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: -2.5em;
}
</style>
