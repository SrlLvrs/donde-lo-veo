<script>
import axios from "axios";

export default {
  //Nombre del componente
  name: "Modal",

  props: {
    //Nombre e ID del título
    name: String,
    id: Number,
  },

  data() {
    return {
      //Array para guardar datos de la API
      posts: null,
    };
  },

  methods: {
    async checkStreaming(event) {
      //Endpoint para disponibilidad
      let url = "https://streaming-availability.p.rapidapi.com/get/basic";
      const options = {
        params: {
          country: "cl",
          tmdb_id: `movie/${this.id}`,
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
  <label :for="id" class="btn btn-primary text-xs md:text-base lg:text-lg" @click="checkStreaming">Donde ver</label>

  <!-- Modal. El ID siempre debe ser entregado por la API, para evitar abrir siempre el mismo modal -->
  <input type="checkbox" :id="id" class="modal-toggle" />
  <div class="modal modal-bottom sm:modal-middle">
    <div class="modal-box" v-if="posts">
      <h3 class="font-bold text-lg">¿Donde ver {{ name }}?</h3>
      <p class="py-4" v-if="posts.streamingInfo.hbo">
        {{ posts.streamingInfo.hbo.cl.link }}
      </p>
      <p class="py-4" v-if="posts.streamingInfo.netflix">
        {{ posts.streamingInfo.netflix.cl.link }}
      </p>
      <p class="py-4" v-if="posts.streamingInfo.apple">
        {{ posts.streamingInfo.apple.cl.link }}
      </p>
      <p class="py-4" v-if="posts.streamingInfo.prime">
        {{ posts.streamingInfo.prime.cl.link }}
      </p>
      <p class="py-4" v-if="posts.streamingInfo.disney">
        {{ posts.streamingInfo.disney.cl.link }}
      </p>
      <p class="py-4" v-if="posts.streamingInfo.mubi">
        {{ posts.streamingInfo.mubi.cl.link }}
      </p>
      <div class="modal-action">
        <label :for="id" class="btn">Cerrar</label>
      </div>
    </div>
  </div>
</template>
