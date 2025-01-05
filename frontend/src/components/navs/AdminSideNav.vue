<template>
  <!-- mobile -->
  <aside class="lg:hidden">
    <img
      :src="barsStaggeredSolid"
      class="w-8 mt-4 ml-auto mr-6 cursor-pointer"
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
          to="/admin"
          :class="[
            $route.path === '/admin'
              ? 'border-b-[2px] border-dark-blue'
              : 'text-black bg-white',
          ]"
          @click.native="closeMenu"
          >Kokpit</router-link
        >
      </ul>
    </div>
  </aside>
</template>
<script>
import barsStaggeredSolid from '@/assets/svgs/bars-staggered-solid.svg';
import XMark from '@/assets/svgs/xmark-solid.svg';
export default {
  name: 'AdminSideNav',
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
