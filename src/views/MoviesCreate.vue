<template>
  <div class="moviesCreate">
    <h5>create a movie</h5>
    Title:
    <input type="text" v-model="newMovieParams.title" />
    Release year:
    <input type="number" v-model="newMovieParams.year" />
    Plot:
    <input type="text" v-model="newMovieParams.plot" />
    <button v-on:click="moviesNew()">create</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newMovieParams: {},
    };
  },
  created: function () {},
  methods: {
    moviesNew: function () {
      axios.post("http://localhost:3000/movies", this.newMovieParams).then((response) => {
        console.log("new movie", response.data);
      });
    },
  },
};
</script>
