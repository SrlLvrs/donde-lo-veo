<script setup>
import PeliculasPopulares from "./components/PeliculasPopulares.vue";
import PeliculasMejorEvaluadas from "./components/PeliculasMejorEvaluadas.vue";
import NavBar from "./components/NavBar.vue";
import SeriesMejorEvaluadas from "./components/SeriesMejorEvaluadas.vue";
import Home from "./components/Home.vue";
</script>

<template>
  <div id="app">
    <NavBar></NavBar>
    <Home></Home>
    <PeliculasPopulares></PeliculasPopulares>
    <PeliculasMejorEvaluadas></PeliculasMejorEvaluadas>
    <SeriesMejorEvaluadas></SeriesMejorEvaluadas>
  </div>
</template>
