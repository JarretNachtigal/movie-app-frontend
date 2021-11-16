<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div v-for="movie in movies" :key="movie.id">
      <p>title: {{ movie.title }}</p>
      <p>year: {{ movie.year }}</p>
      <p>plot: {{ movie.plot }}</p>
      <button v-on:click="moviesShow(movie)">show</button>
    </div>
    <div>
      <h5>create a movie</h5>
      Title:
      <input type="text" v-model="newMovieParams.title" />
      Release year:
      <input type="number" v-model="newMovieParams.year" />
      Plot:
      <input type="text" v-model="newMovieParams.plot" />
      <button v-on:click="moviesNew()">create</button>
    </div>
    <div>
      <dialog id="movie-details">
        <form method="dialog">
          <h1>movie info</h1>
          <p>
            title:
            <input type="text" v-model="currentMovie.title" />
          </p>
          <p>
            year:
            <input type="number" v-model="currentMovie.year" />
          </p>
          <p>
            plot:
            <input type="text" v-model="currentMovie.plot" />
          </p>
          <button>close</button>
          <button v-on:click="moviesUpdate(currentMovie)">update</button>
          <button v-on:click="moviesDestroy(currentMovie)">delete</button>
        </form>
      </dialog>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "Welcome to the movie-app front end!",
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
    moviesNew: function () {
      axios.post("http://localhost:3000/movies", this.newMovieParams).then((response) => {
        console.log("new movie", response.data);
        this.movies.push(response.data);
      });
    },
    moviesShow: function (movie) {
      axios.get(`http://localhost:3000/movies/${movie.id}`, this.newMovieParams).then((response) => {
        console.log("show movie", response.data);
        this.currentMovie = response.data;
        document.querySelector("#movie-details").showModal();
      });
    },
    moviesUpdate: function (movie) {
      axios
        .patch(`http://localhost:3000/movies/${movie.id}`, movie)
        .then((response) => {
          console.log("movie updated", response.data);
          this.currentMovie = {};
        })
        .catch((error) => {
          console.log("update error", error.response);
        });
    },
    moviesDestroy: function () {
      axios.delete(`http://localhost:3000/movies/${this.currentMovie.id}`).then((response) => {
        console.log("destroyed", response.data);
      });
    },
  },
};
</script>
