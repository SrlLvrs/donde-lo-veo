<script>
import {
  HomeIcon,
  MagnifyingGlassIcon,
  GlobeAmericasIcon,
} from "@heroicons/vue/24/outline";
import axios from "axios";

export default {
  //Nombre del componente
  name: "PeliculasPopulares",

  //Datos
  data() {
    return {
      items: [
        {
          name: "Inicio",
          href: "#",
          icon: HomeIcon,
        },
        {
          name: "Buscar",
          href: "#",
          icon: MagnifyingGlassIcon,
        },
        {
          name: "Descubrir",
          href: "#",
          icon: GlobeAmericasIcon,
        },
      ],
      prompt: "",
      resultados: [],
    };
  },

  //Métodos
  methods: {
    async buscar(prompt) {
      let key = import.meta.env.VITE_TMDB_KEY;
      let base_url = "https://api.themoviedb.org/3/search/multi";
      //Variable con endpoint
      let url = `${base_url}?api_key=${key}&language=es&query=${prompt}&page=1&include_adult=false`;
      await axios.get(url).then((response) => this.resultados = response.data.results);
      console.log(this.resultados);
    },
  },
};
</script>

<template>
  <div class="navbar top-0 z-10 bg-white/50 backdrop-blur-sm">
    <!-- Lado izquierdo del navbar, contiene el menú mobile -->
    <div class="navbar-start lg:w-1/4">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        <!-- Navbar mobile -->
        <ul
          tabindex="0"
          class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li v-for="item in items" :key="item.name" :href="item.href">
            <a :href="item.href">
              <component
                :is="item.icon"
                class="h-6 w-6 flex-shrink-0"
                aria-hidden="true"
              />
              <span class="md:text-lg">
                {{ item.name }}
              </span>
            </a>
          </li>
        </ul>
      </div>
      <a class="btn btn-ghost normal-case text-xl">
        <span class="mr-2"> Dónde lo veo </span>
      </a>
    </div>
    <!-- Lado central del navbar, vacío -->
    <div class="navbar-center"></div>
    <!-- Lado derecho del navbar -->
    <div class="navbar-end hidden lg:flex lg:w-3/4">
      <!-- BUSCADOR -->
      <div class="form-control">
        <!-- Input que busca usando la tecla enter -->
        <input
          type="text"
          v-model="prompt"
          placeholder="Busca aquí"
          class="input input-ghost w-full max-w-xs"
          @keyup.enter="buscar(prompt)"
        />
      </div>
      <ul class="menu menu-horizontal px-1">
        <li v-for="item in items" :key="item.name" :href="item.href">
          <a :href="item.href">
            <component
              :is="item.icon"
              class="h-6 w-6 flex-shrink-0"
              aria-hidden="true"
            />
            {{ item.name }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
