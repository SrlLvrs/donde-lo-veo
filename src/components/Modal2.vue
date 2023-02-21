<script>
import axios from "axios";

export default {
  //Nombre del componente
  name: "Modal2",

  props: {
    nombre: String
  },
};
</script>

<template>
  <div>
    <div class="modal-box">
        <h3 class="font-bold text-lg">{{ nombre }}</h3>
        <p class="py-4">
          {{ nombre }}
        </p>
        <div class="modal-action">
          <label for="my-modal-6" class="btn">{{ nombre }}</label>
        </div>
      </div>
  </div>
</template>
