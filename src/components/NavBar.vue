<script setup>
import {
  HomeIcon,
  MagnifyingGlassIcon,
  GlobeAmericasIcon,
} from "@heroicons/vue/24/outline";

const items = [
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
];
</script>

<template>
  <div class="navbar fixed top-0 z-10 bg-white/50 backdrop-blur-sm">
    <div class="navbar-start lg:w-1/4">
      <!-- Lado izquierdo del navbar, contiene el menú mobile -->
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
    <div class="navbar-center">
      <!-- Lado central del navbar, vacío -->
    </div>
    <div class="navbar-end hidden lg:flex lg:w-3/4">
      <!-- Lado derecho del navbar -->
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
