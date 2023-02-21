<script>
import axios from "axios";

export default {
  //Nombre del componente
  name: "Availability",

  data() {
    return {
      //Array para guardar datos de la API
      posts: null,
    };
  },

  //Endpoint para disponibilidad
  async created() {
    //Script recomendado de rapidApi
    let url = "https://streaming-availability.p.rapidapi.com/get/basic";
    const options = {
      params: { country: "cl", tmdb_id: "movie/550", output_language: "es" },
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
};
</script>

<template>
  <div v-if="posts">
    {{ posts.title }}
    <p v-if="posts.streamingInfo.hbo">
      {{ posts.streamingInfo.hbo.cl.link }}
    </p>
    <p v-if="posts.streamingInfo.netflix">
      {{ posts.streamingInfo.netflix.cl.link }}
    </p>
    <p v-if="posts.streamingInfo.apple">
      {{ posts.streamingInfo.apple.cl.link }}
    </p>
    <p v-if="posts.streamingInfo.prime">
      {{ posts.streamingInfo.prime.cl.link }}
    </p>
    <p v-if="posts.streamingInfo.disney">
      {{ posts.streamingInfo.disney.cl.link }}
    </p>
    <p v-if="posts.streamingInfo.mubi">
      {{ posts.streamingInfo.mubi.cl.link }}
    </p>
  </div>
</template>
