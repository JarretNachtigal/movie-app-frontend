<template>
  <div class="moviesShow">
    <h1>{{ this.movie.title }}</h1>
    <div>
      <p>from user: {{ movie.title }}</p>
      <p>{{ movie.year }}</p>
      <p>{{ movie.plot }}</p>
      <img :src="movie.image" :alt="movie.title" />
      <router-link to="/movies">back to all</router-link>
      |
      <router-link v-bind:to="`/movies/${this.movie.id}/edit`">edit</router-link>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Movie show",
      movie: {},
    };
  },
  created: function () {
    axios.get("/movies/" + this.$route.params.id).then((response) => {
      this.movie = response.data;
      console.log(response);
    });
  },
  methods: {},
};
</script>
