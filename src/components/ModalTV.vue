<script>
import axios from "axios";

export default {
  //Nombre del componente
  name: "ModalTV",

  props: {
    //Nombre e ID del título
    name: String,
    overview: String,
    id: Number,
    id_modal: String
  },

  data() {
    return {
      //Array para guardar datos de la API
      posts: null,
    };
  },

  methods: {
    async checkStreaming(event) {
      //Endpoint para obtener resultados de un título, que se pasa por ID
      let url = "https://streaming-availability.p.rapidapi.com/get/basic";
      const options = {
        params: {
          country: "cl",
          tmdb_id: `tv/${this.id}`,
          output_language: "es",
        },
        headers: {
          "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
          "X-RapidAPI-Host": "streaming-availability.p.rapidapi.com",
        },
      };

      await axios
        .get(url, options)
        .then((response) => (this.posts = response.data));
      console.log(this.posts);
    },
  },
};
</script>

<template>
  <!-- Botón para abrir el modal -->
  <!-- Este botón también ejecuta la función para checkear disponibilidad de streaming -->
  <label :for="id_modal" class="btn btn-primary text-xs md:text-base lg:text-lg" @click="checkStreaming">Donde ver</label>

  <!-- Modal. El ID siempre debe ser entregado por la API, para evitar abrir siempre el mismo modal -->
  <input type="checkbox" :id="id_modal" class="modal-toggle" />
  <div class="modal modal-bottom sm:modal-middle">
    <!-- El modal sólo aparece si hay contenido en POSTS -->
    <!-- Es decir, que el modal espera a que la información llegue desde la API -->
    <div class="modal-box" v-if="posts">
      <h3 class="font-bold text-lg">¿Donde ver {{ name }}?</h3>
      <!-- Renderización condicional en base a los links que encuentre -->
      <!-- HBO MAX -->
      <div class="py-4" v-if="posts.streamingInfo.hbo">
        <a :href="posts.streamingInfo.hbo.cl.link" target="_blank">
          <img
          class="relative bottom-0.5 mr-2 inline-block w-24"
          src="/hbo.svg"
          alt="hbo max logo"
          />
        </a>
        <p class="text-sm py-4">
          <h2 class="text-base">
            Sinopsis:
          </h2>
          <br>
          {{ overview }}
        </p>
      </div>
      <!-- NETFLIX -->
      <div class="py-4" v-else-if="posts.streamingInfo.netflix">
        <a :href="posts.streamingInfo.netflix.cl.link" target="_blank">
          <img
          class="relative bottom-0.5 mr-2 inline-block w-24"
          src="/netflix.svg"
          alt="netflix logo"
          />
        </a>
        <p class="text-sm py-4">
          <h2 class="text-base">
            Sinopsis:
          </h2>
          <br>
          {{ overview }}
        </p>
      </div>
      <!-- APPLE TV+ -->
      <div class="py-4" v-else-if="posts.streamingInfo.apple">
        <a :href="posts.streamingInfo.apple.cl.link" target="_blank">
          <img
          class="relative bottom-0.5 mr-2 inline-block w-24"
          src="/apple.svg"
          alt="apple logo"
          />
        </a>
        <p class="text-sm py-4">
          <h2 class="text-base">
            Sinopsis:
          </h2>
          <br>
          {{ overview }}
        </p>
      </div>
      <!-- AMAZON PRIME VIDEO -->
      <div class="py-4" v-else-if="posts.streamingInfo.prime">
        <a :href="posts.streamingInfo.prime.cl.link" target="_blank">
          <img
          class="relative bottom-0.5 mr-2 inline-block w-24"
          src="/prime.svg"
          alt="amazon prime logo"
          />
        </a>
        <p class="text-sm py-4">
          <h2 class="text-base">
            Sinopsis:
          </h2>
          <br>
          {{ overview }}
        </p>
      </div>
      <!-- DISNEY+ -->
      <div class="py-4" v-else-if="posts.streamingInfo.disney">
        <a :href="posts.streamingInfo.disney.cl.link" target="_blank">
          <img
          class="relative bottom-0.5 mr-2 inline-block w-24"
          src="/disney.svg"
          alt="disney logo"
          />
        </a>
        <p class="text-sm py-4">
          <h2 class="text-base">
            Sinopsis:
          </h2>
          <br>
          {{ overview }}
        </p>
      </div>
      <!-- MUBI -->
      <div class="py-4" v-else-if="posts.streamingInfo.mubi">
        <a :href="posts.streamingInfo.mubi.cl.link" target="_blank">
          <img
          class="relative bottom-0.5 mr-2 inline-block w-24"
          src="/mubi.svg"
          alt="mubi logo"
          />
        </a>
        <p class="text-sm py-4">
          <h2 class="text-base">
            Sinopsis:
          </h2>
          <br>
          {{ overview }}
        </p>
      </div>
      <!-- SIN INFO -->
      <p class="py-4" v-else>No hay información de streaming sobre éste título :(</p>
      <div class="modal-action">
        <label :for="id_modal" class="btn">Gracias!</label>
      </div>
    </div>
  </div>
</template>