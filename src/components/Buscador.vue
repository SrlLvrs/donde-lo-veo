<script>
import axios from "axios";
import ResultadosComp from "./Resultados.vue";

export default {
  //Nombre del componente
  name: "Buscador",

  props: {},

  data() {
    return {
      prompt: "",
      resultados: [],
    };
  },

  methods: {
    async searchMethod(prompt) {
      this.resultados = []
      let key = import.meta.env.VITE_TMDB_KEY;
      let base_url = "https://api.themoviedb.org/3/search/multi";
      //Variable con endpoint
      let url = `${base_url}?api_key=${key}&language=es&query=${prompt}&page=1&include_adult=false`;
      await axios
        .get(url)
        .then((response) => (this.resultados = response.data.results));
      console.log(this.resultados);
    },
  },
  components: { ResultadosComp },
};
</script>

<template>
  <div
    class="grid place-content-center md:text-xl lg:text-2xl h-72 md:h-96 lg:h-[32rem] xl:h-[40rem] w-full border border-red-500"
  >
    <h1 class="">Buscador de series y películas</h1>
    <input
      type="text"
      v-model="prompt"
      placeholder="Breaking Bad, El Padrino, Clarence..."
      class="my-3 input input-bordered input-primary w-full max-w-xs"
      @keyup.enter="searchMethod(prompt)"
    />
    <label
      class="btn btn-primary text-xs md:text-base lg:text-lg"
      @click="searchMethod(prompt)"
      >Buscar</label
    >
  </div>
  <!-- RESULTADOS -->
  <div v-if="resultados">
    <ResultadosComp :results="resultados"></ResultadosComp>
  </div>
  <!-- 
      <div v-for="resultado in resultados" :key="resultado.index">
      <div v-if="resultado.name">
        Serie: {{ resultado.name }}
      </div>
      <div v-if="resultado.title">
        Película: {{ resultado.title }}
      </div>
    </div> 
--></template>
