<template lang="html">
  <div class="rate">
    How do you rate it ?
    <div class="star-rating">
      <label class="star-rating__star"
      v-for="rating in ratings"
      v-bind:class="{selected: ((value >= rating && value != null))}"
      v-on:mouseover="starOver(rating)"
      v-on:mouseout="starOut(rating)"
      v-on:click="setMyRating()">
      <input
      class="star-rating star-rating__checkbox"
      type="radio"
      v-model="value">
      ♥
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'rating',
  data () {
    return {
      value: '',
      ratings: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }
  },
  methods: {
    starOver: function (index) {
      this.temp_value = this.value
      this.value = index
    },
    starOut: function (index) {
      this.value = this.temp_value
    },
    setMyRating: function () {
      this.$store.commit('setMyMovieRating', this.value)
    }
  }
}
</script>

<style lang="css">
.star-rating__checkbox {
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  height: 1px;
  width: 1px;
  margin: -1px;
  padding: 0;
  border: 0; }

.star-rating__star {
  display: inline-block;
  padding: 3px;
  vertical-align: middle;
  line-height: 1;
  font-size: 1.5em;
  color: #ababab;
  transition: color .2s ease-out;
}
.star-rating__star:hover {
  cursor: pointer;
}
.star-rating__star.selected {
  color: #c90000;
}
.star-rating__star.disabled:hover {
  cursor: default;
}
</style>
