<template>
  <form v-on:submit.prevent="moviesNew()">
    <div class="moviesCreate">
      <h5>create a movie</h5>
      Title:
      <input type="text" v-model="newMovieParams.title" />
      Release year:
      <input type="number" v-model="newMovieParams.year" />
      Plot:
      <input type="text" v-model="newMovieParams.plot" />
      <small v-if="newMovieParams.plot.length > 1 && newMovieParams.plot.length < 100">
        {{ 100 - this.newMovieParams.plot.length }} characters remaining
      </small>
      <small v-if="newMovieParams.plot.length > 100" class="text-danger">
        plot must be at less than 100 characters
      </small>
      <input v-if="newMovieParams.plot.length < 100" type="submit" value="Submit" />
    </div>
  </form>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newMovieParams: { title: "", year: "", plot: "" },
    };
  },
  created: function () {},
  methods: {
    moviesNew: function () {
      axios.post("http://localhost:3000/movies", this.newMovieParams).then((response) => {
        console.log("new movie", response.data);
        this.$router.push("/movies");
      });
    },
  },
};
</script>
