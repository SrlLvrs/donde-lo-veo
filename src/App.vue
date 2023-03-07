<script setup>
import PeliculasPopulares from "./components/PeliculasPopulares.vue";
import PeliculasMejorEvaluadas from "./components/PeliculasMejorEvaluadas.vue";
import NavBar from "./components/NavBar.vue";
import SeriesMejorEvaluadas from "./components/SeriesMejorEvaluadas.vue";
import Logo from "./components/Logo.vue";
</script>

<template>
  <NavBar></NavBar>
  <PeliculasPopulares></PeliculasPopulares>
  <PeliculasMejorEvaluadas></PeliculasMejorEvaluadas>
  <SeriesMejorEvaluadas></SeriesMejorEvaluadas>
  <Logo></Logo>
</template>
