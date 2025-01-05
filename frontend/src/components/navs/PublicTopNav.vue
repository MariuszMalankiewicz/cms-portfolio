<template>
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
        >Projekty</router-link
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
export default {
  name: 'PublicTopNav',
};
</script>
