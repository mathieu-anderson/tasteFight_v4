<template lang="html">
  <nav>
   <h1 @click="resetApp">tasteFight</h1>
  </nav>
</template>

<script>
export default {
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

<style lang="css">
nav {
  background-color: #e9e9e9;
  width: 100vw;
  position: fixed;
}
h1 {
  font-weight: bold;
  text-shadow: 1px 1px 4px rgba(150, 150, 150, 0.98);
  cursor: pointer;
}
.pointer {
  cursor: pointer;
}
</style>
