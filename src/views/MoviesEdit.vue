<template>
  <div class="moviesUpdate">
    <h5>Edit movie</h5>
    Title:
    <input type="text" v-model="currentMovie.title" />
    Release year:
    <input type="number" v-model="currentMovie.year" />
    Plot:
    <input type="text" v-model="currentMovie.plot" />
    <button v-on:click="moviesUpdate()">update</button>
    <button v-on:click="moviesDestroy()">delete</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      currentMovie: {},
    };
  },
  created: function () {
    axios.get(`http://localhost:3000/movies/${this.$route.params.id}`).then((response) => {
      console.log("current movie ", response.data);
      this.currentMovie = response.data;
    });
  },
  methods: {
    moviesUpdate: function () {
      axios
        .patch(`http://localhost:3000/movies/${this.currentMovie.id}`, this.currentMovie)
        .then((response) => {
          console.log("movie updated", response.data);
          this.currentMovie = {};
          this.$router.push("/movies");
        })
        .catch((error) => {
          console.log("edit error", error.response);
        });
    },
    moviesDestroy: function () {
      axios.delete(`http://localhost:3000/movies/${this.currentMovie.id}`).then((response) => {
        console.log("destroyed", response.data);
        this.$router.push("/movies");
      });
    },
  },
};
</script>
