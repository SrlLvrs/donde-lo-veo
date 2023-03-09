<script>
import axios from "axios";
import ModalMovie from "./ModalMovie.vue";
import Logo from "./Logo.vue";

export default {
  //Nombre del componente
  name: "PeliculasPopulares",
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
    let base_url = "https://api.themoviedb.org/3/discover";
    let sort = "popularity.desc";
    let providers = "8|337|119|350|384|11";
    //Variable con endpoint
    let url = `${base_url}/movie?api_key=${key}&language=es&sort_by=${sort}&include_adult=false&include_video=false&page=1&with_watch_providers=${providers}&watch_region=CL`;
    await axios
      .get(url)
      .then((response) => (this.populares = response.data.results));

    //OBTENER IDS PARA CARRUSEL
    var len = this.populares.length;
    var i;

    for (i = 0; i < len; i++) {
      /*Si i es igual a cero, el indice es el último del array
      En caso contrario, es i - 1 (es decir, el anterior)*/
      var previous = this.populares[i == 0 ? len - 1 : i - 1];
      /*Si i es igual al len - 1, entonces el índice es 0
      sino, es i + 1*/
      var next = this.populares[i == len - 1 ? 0 : i + 1];
      //Se le añade el # para hacerle referencia de id en el DOM
      this.populares[i].anterior = "#" + previous.id;
      this.populares[i].siguiente = "#" + next.id;
    }
  },
  components: { ModalMovie, Logo },
};
</script>

<template>
  <!-- Carrusel -->
  <div class="carousel">
    <!-- Carrusel item -->
    <div
      class="md:text-xl lg:text-2xl carousel-item relative h-72 md:h-96 lg:h-[32rem] xl:h-[40rem] w-full bg-cover bg-top"
      v-for="item in populares"
      :key="item.index"
      :style="{ backgroundImage: `url(${this.image}+${item.backdrop_path})` }"
      :id="item.id"
    >
      <!-- Título y botones -->
      <div class="grid grid-cols-2 gap-1 w-full">
        <!-- Columna izquierda: Título -->
        <div class="grid content-end p-3 lg:p-5">
          <p>
            <Logo :id="item.id"></Logo>
            <!-- TMDB LOGO -->
            <!-- 
              <br />
              <img
              class="relative bottom-0.5 mr-2 inline-block h-6 w-11"
              src="/tmdb.svg"
              alt="tmdb logo"
            />
            {{ item.vote_average }} -->
          </p>
        </div>
        <!-- Columna derecha: Botones -->
        <div class="flex justify-end mt-auto gap-2 p-3 lg:p-5">
          <!-- Modal -->
          <ModalMovie
            :name="item.title"
            :id="item.id"
            :id_modal="item.title"
            :overview="item.overview"
          ></ModalMovie>
        </div>
      </div>
      <!-- BOTONES DE CONTROL -->
      <div
        class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
      >
        <a :href="item.anterior" class="btn btn-circle btn-primary">❮</a>
        <a :href="item.siguiente" class="btn btn-circle btn-primary">❯</a>
      </div>
    </div>
  </div>
</template>
