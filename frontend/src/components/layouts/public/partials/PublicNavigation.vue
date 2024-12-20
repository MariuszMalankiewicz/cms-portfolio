<template>
  <!-- Mobile -->
  <nav class="lg:hidden">
    <img
      :src="barsStaggeredSolid"
      class="w-8 mr-4 cursor-pointer"
      alt="bars-staggered-solid"
      @click="changeStatus"
    />
    <div
      :class="[status ? 'absolute' : 'hidden']"
      class="top-0 left-0 w-full h-screen bg-white"
    >
      <img
        :src="XMark"
        alt="xmark-solid"
        class="w-8 mt-8 ml-auto mr-12 cursor-pointer"
        @click="changeStatus"
      />
      <ul
        class="flex flex-col items-center justify-around h-[80%] font-semibold text-[20px]"
      >
        <router-link to="/">Strona Główna</router-link>
        <router-link to="/about">O Mnie</router-link>
        <router-link to="/portfolio">Portfolio</router-link>
        <router-link to="/about">Kontakt</router-link>
        <router-link to="/login">Zaloguj się</router-link>
      </ul>
    </div>
  </nav>

  <!-- Desktop -->
  <nav class="hidden w-full lg:block">
    <ul class="flex justify-end space-x-12 font-semibold">
      <router-link to="/">Strona Główna</router-link>
      <router-link to="/about">O Mnie</router-link>
      <router-link to="/portfolio">Portfolio</router-link>
      <router-link to="/about">Kontakt</router-link>
      <router-link to="/login">Zaloguj się</router-link>
    </ul>
  </nav>
</template>

<script>
import barsStaggeredSolid from '@/assets/svgs/bars-staggered-solid.svg';
import XMark from '@/assets/svgs/xmark-solid.svg';
export default {
  name: 'PublicNavigation',
  data() {
    return {
      barsStaggeredSolid,
      XMark,
      status: false,
    };
  },
  methods: {
    changeStatus() {
      this.status = !this.status;
    },
  },
};
</script>
