<template>
  <div class="moviesIndex">
    <h1>{{ message }}</h1>
    <div v-for="movie in movies" :key="movie.id">
      <p>title: {{ movie.title }}</p>
      <p>year: {{ movie.year }}</p>
      <p>plot: {{ movie.plot }}</p>
      <button v-on:click="moviesShow(movie)">show</button>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "Welcome to the movie-app front end (seperate crud actions version)",
      movies: [],
      newMovieParams: {},
      currentMovie: {},
    };
  },
  created: function () {
    this.moviesIndex();
  },
  methods: {
    moviesIndex: function () {
      axios.get("http://localhost:3000/movies").then((response) => {
        console.log("all movies", response.data);
        this.movies = response.data;
      });
    },
    moviesShow: function (movie) {
      this.$router.push(`/movies/${movie.id}`);
    },
  },
};
</script>
