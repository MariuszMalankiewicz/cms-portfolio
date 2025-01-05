<template>
  <!-- Mobile -->
  <nav class="lg:hidden">
    <img
      :src="barsStaggeredSolid"
      class="w-8 mr-4 cursor-pointer"
      alt="bars-staggered-solid"
      @click="toggleMenu"
    />
    <div
      :class="[menuOpen ? 'absolute' : 'hidden']"
      class="top-0 left-0 w-full h-screen bg-white"
    >
      <img
        :src="XMark"
        alt="xmark-solid"
        class="w-8 mt-8 ml-auto mr-12 cursor-pointer"
        @click="toggleMenu"
      />
      <ul
        class="flex flex-col items-center justify-around h-[80%] font-semibold text-[20px]"
      >
        <router-link
          class="transition-all duration-150 ease-in-out"
          to="/"
          :class="[
            $route.path === '/'
              ? 'border-b-[2px] border-dark-blue'
              : 'text-black bg-white',
          ]"
          @click.native="closeMenu"
          >Strona Główna</router-link
        >
        <router-link
          class="transition-all duration-150 ease-in-out"
          to="/about"
          :class="[
            $route.path === '/about'
              ? 'border-b-[2px] border-dark-blue'
              : 'text-black bg-white',
          ]"
          @click.native="closeMenu"
          >O Mnie</router-link
        >
        <router-link
          class="transition-all duration-150 ease-in-out"
          to="/project"
          :class="[
            $route.path === '/project'
              ? 'border-b-[2px] border-dark-blue'
              : 'text-black bg-white',
          ]"
          @click.native="closeMenu"
          >Project</router-link
        >
        <router-link
          class="transition-all duration-150 ease-in-out"
          to="/contact"
          :class="[
            $route.path === '/contact'
              ? 'border-b-[2px] border-dark-blue'
              : 'text-black bg-white',
          ]"
          @click.native="closeMenu"
          >Kontakt</router-link
        >
        <router-link
          class="transition-all duration-150 ease-in-out"
          to="/login"
          :class="[
            $route.path === '/login'
              ? 'border-b-[2px] border-dark-blue'
              : 'text-black bg-white',
          ]"
          @click.native="closeMenu"
        >
          Zaloguj się
        </router-link>
      </ul>
    </div>
  </nav>

  <!-- Desktop -->
  <nav class="hidden w-full lg:block">
    <ul class="flex justify-end space-x-12 font-semibold">
      <router-link
        class="transition-all duration-150 ease-in-out"
        to="/"
        :class="[
          $route.path === '/'
            ? 'border-b-[2px] border-dark-blue'
            : 'text-black bg-white',
        ]"
        >Strona Główna</router-link
      >
      <router-link
        class="transition-all duration-150 ease-in-out"
        to="/about"
        :class="[
          $route.path === '/about'
            ? 'border-b-[2px] border-dark-blue'
            : 'text-black bg-white',
        ]"
        >O Mnie</router-link
      >
      <router-link
        class="transition-all duration-150 ease-in-out"
        to="/project"
        :class="[
          $route.path === '/project'
            ? 'border-b-[2px] border-dark-blue'
            : 'text-black bg-white',
        ]"
        >Project</router-link
      >
      <router-link
        class="transition-all duration-150 ease-in-out"
        to="/contact"
        :class="[
          $route.path === '/contact'
            ? 'border-b-[2px] border-dark-blue'
            : 'text-black bg-white',
        ]"
        >Kontakt</router-link
      >
      <router-link
        class="transition-all duration-150 ease-in-out"
        to="/login"
        :class="[
          $route.path === '/login'
            ? 'border-b-[2px] border-dark-blue'
            : 'text-black bg-white',
        ]"
      >
        Zaloguj się
      </router-link>
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
      menuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    closeMenu() {
      this.menuOpen = false;
    },
  },
};
</script>
