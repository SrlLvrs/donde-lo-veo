<script>
import axios from "axios";
import ModalTV from "./ModalTV.vue";

export default {
  //Nombre del componente
  name: "SeriesMejorEvaluadas",
  data() {
    return {
      //Array para guardar datos de la API
      mejores: [],
      image: "https://image.tmdb.org/t/p/original",
    };
  },
  //Método para llamar a la API cuando se cree la instancia
  async created() {
    let base_url = "https://api.themoviedb.org/3/discover"
    let key = import.meta.env.VITE_TMDB_KEY;
    let sort = "vote_average.desc"
    let providers = "8|337|119|350|384|11"
    //Variable con endpoint
    let url = `${base_url}/tv?api_key=${key}&language=es&sort_by=${sort}&include_adult=false&include_video=false&page=1&vote_count.gte=1000&with_watch_providers=${providers}&watch_region=CL`;
    await axios
      .get(url)
      .then((response) => (this.mejores = response.data.results));
  },
  components: { ModalTV },
};
</script>

<template>
  <h2 class="m-5 text-xl md:text-2xl font-semibold">Series Mejor Evaluadas</h2>
  <div class="carousel rounded-box">
    <div
      class="carousel-item pb-4 mr-3"
      v-for="item in mejores"
      :key="item.index"
    >
      <div class="card card-compact w-40 md:w-48 bg-base-100 shadow-lg">
        <figure><img class="h-60 md:h-72" :src="image+item.poster_pathh" alt="poster" /></figure>
        <div class="card-body gap-0">
          <a :href="item.href">
            <h2 class="card-title">{{ item.name }}</h2>
          </a>
          <!-- ESTRELLA SVG CON NOTA -->
          <p class="lg:text-lg pb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6 inline-block relative bottom-0.5 fill-amber-400 mr-1"
            >
              <path
                fill-rule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clip-rule="evenodd"
              ></path>
            </svg>
            {{ item.vote_average }}
          </p>
          <ModalTV :name="item.name" :id="item.id" :id_modal="item.name" :overview="item.overview"></ModalTV>
        </div>
      </div>
    </div>
  </div>
</template>
