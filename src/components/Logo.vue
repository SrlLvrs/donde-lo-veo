<script>
import axios from "axios";

export default {
  //Nombre del componente
  name: "Logo",

  props: {
    id: Number,
  },

  data() {
    return {
      //Array para guardar datos de la API
      images: [],
      base_image: "https://www.themoviedb.org/t/p/original",
      logo: ""
    };
  },
  //Método para llamar a la API cuando se cree la instancia
  async created() {
    let key = import.meta.env.VITE_TMDB_KEY;
    let base_url = "https://api.themoviedb.org/3/movie";
    //Variable con endpoint
    let url = `${base_url}/${this.id}/images?api_key=${key}&language=en`;
    await axios
      .get(url)
      .then((response) => (this.images = response.data));
      //Variable con la ruta al primer logo del array
      this.logo = this.base_image + this.images.logos[0].file_path
  },
};
</script>

<template>
  <div class="w-40 lg:w-80">
    <img :src="logo" alt="logo">
  </div>
</template>
