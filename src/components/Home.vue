<script>

export default {
  //Nombre del componente
  name: "Buscador",

  props: {},

  data() {
    return {};
  },
};
</script>

<template>
  <div class="grid place-content-center md:text-xl lg:text-2xl h-72 md:h-96 lg:h-[32rem] xl:h-[40rem] w-full border border-red-500">
    <h1 class="">Buscador de series y películas</h1>
    <input type="text" placeholder="Breaking Bad, El Padrino, Clarence..." class="my-3 input input-bordered input-primary w-full max-w-xs" />
    <label class="btn btn-primary text-xs md:text-base lg:text-lg" @click="checkStreaming">Buscar</label>
  </div>
</template>