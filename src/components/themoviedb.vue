<script>
import axios from "axios";

export default {
  //Nombre del componente
  name: "MovieDB",

  data() {
    return {
      //Array para guardar datos de la API
      posts: [],
    };
  },

  //Método para llamar a la API cuando se cree la instancia
  async created() {
    let key = "b839a948ada200340cd923ef9f9c2759";
    //Variable con endpoint
    let url = `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=es`

    await axios
      .get(url)
      .then((response) => (this.posts = response.data.results));
    console.log(this.posts);
  },
};
</script>

<template>
  <h1>Películas Populares usando TheMovieDB</h1>
  <div v-for="post in posts" :key="post.index">
    {{ post.title }}
  </div>
</template>
