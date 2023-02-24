<script setup>
const mejores = [
  {
    name: "The Offering",
    year: "2023",
    rate: "5.8",
    href: '#',
    image: "/offering.jpg",
  },
  {
    name: "Pinocchio",
    year: "2022",
    rate: "8.3",
    href: '#',
    image: "/pinocchio.jpg",
  },
  {
    name: "Avatar 2",
    year: "2022",
    rate: "7.7",
    href: '#',
    image: "/avatar-2.jpg",
  },
  {
    name: "Black Adam",
    year: "2022",
    rate: "7.9",
    href: '#',
    image: "/black-adam.jpg",
  },
  {
    name: "Fall",
    year: "2022",
    rate: "7.6",
    href: '#',
    image: "/fall.jpg",
  },
  {
    name: "Lost Bullet 2",
    year: "2022",
    rate: "7.2",
    href: '#',
    image: "/lost-bullet-2.jpg",
  },
  {
    name: "Minions 2",
    year: "2022",
    rate: "7.7",
    href: '#',
    image: "/minions-2.jpg",
  },
  {
    name: "Smile",
    year: "2022",
    rate: "7.3",
    href: '#',
    image: "/smile.jpg",
  },
];
</script>

<template>
  <h2 class="m-5 text-xl md:text-2xl font-semibold">Mejor Evaluadas</h2>
  <div class="carousel rounded-box">
    <div class="carousel-item pb-4 mr-3" v-for="item in mejores" :key="item.index">
      <div class="card card-compact w-40 md:w-48 bg-base-100 shadow-lg">
        <figure><img :src="item.image" alt="poster" /></figure>
        <div class="card-body">
          <a :href="item.href">
            <h2 class="card-title truncate">{{ item.name }}</h2>
          </a>
          <p class="lg:text-lg">{{ item.year }}</p>
          <p class="lg:text-lg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
              class="w-6 h-6 inline-block relative bottom-0.5 fill-amber-400 mr-1">
              <path fill-rule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clip-rule="evenodd"></path>
            </svg>
            {{ item.rate }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
