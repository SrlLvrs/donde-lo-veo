<script>
import axios from "axios";
import Modal from "./Modal.vue";

export default {
  //Nombre del componente
  name: "Populares",
  data() {
    return {
      //Array para guardar datos de la API
      populares: [],
      image: "https://image.tmdb.org/t/p/original",
    };
  },
  //Método para llamar a la API cuando se cree la instancia
  async created() {
    let key = import.meta.env.VITE_TMDB_KEY;
    //Variable con endpoint
    let url = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=es&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_providers=8|337|119|350|384|11&watch_region=CL`;
    await axios
      .get(url)
      .then((response) => (this.populares = response.data.results));
    console.log(this.populares);
  },
  components: { Modal },
};
</script>

<template>
  <div class="carousel rounded-box">
    <div
      class="md:text-xl lg:text-2xl carousel-item h-72 md:h-96 lg:h-[32rem] xl:h-[40rem] w-full bg-cover bg-center"
      v-for="item in populares"
      :key="item.index"
      :style="{ backgroundImage: `url(${this.image}${item.backdrop_path})` }"
    >
      <!-- Título y botones -->
      <div class="grid grid-cols-2 gap-1 w-full">
        <!-- Columna izquierda: Título -->
        <div class="grid content-end p-3 lg:p-5">
          <p>
            <span class="font-semibold">{{ item.title }}</span
            ><br />
            <!-- TMDB LOGO -->
            <img
              class="relative bottom-0.5 mr-2 inline-block h-6 w-11"
              src="/tmdb.svg"
              alt="tmdb logo"
            />
            {{ item.vote_average }}
          </p>
        </div>
        <!-- Columna derecha: Botones -->
        <div class="flex justify-end mt-auto gap-2 p-3 lg:p-5">
          <!-- Modal -->
          <Modal :name="item.title" :id="item.id"></Modal>
        </div>
      </div>
    </div>
  </div>
</template>
