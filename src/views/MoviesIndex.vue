<template>
  <div class="moviesIndex">
    <h1>{{ message }}</h1>
    <div>
      <button v-on:click="sortAttribute = 'title'">Sort Alphabetically</button>
    </div>
    <div>
      Search by name:
      <input v-model="titleFilter" list="titles" />
      <datalist id="titles">
        <option v-for="movie in movies" v-bind:key="movie.id">{{ movie.title }}</option>
      </datalist>
    </div>
    <div v-for="movie in orderBy(filterBy(movies, titleFilter, sortAttribute), 'title')" :key="movie.id">
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
import Vue2Filters from "vue2-filters";

export default {
  mixins: [Vue2Filters.mixin],
  data: function () {
    return {
      message: "Welcome to the movie-app front end (seperate crud actions version)",
      movies: [],
      newMovieParams: {},
      currentMovie: {},
      titleFilter: "",
      sortAttribute: "",
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
