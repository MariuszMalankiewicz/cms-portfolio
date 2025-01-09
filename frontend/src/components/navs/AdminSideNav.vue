<template>
  <nav class="hidden lg:block">
    <ul class="flex justify-end space-x-12 font-semibold">
      <router-link
        class="transition-all duration-150 ease-in-out"
        to="/"
        :class="[
          $route.path === '/admin'
            ? 'border-b-[2px] border-dark-blue'
            : 'text-gray-200',
        ]"
        >Kokpit</router-link
      >
    </ul>
  </nav>
</template>
<script>
export default {
  name: 'AdminSideNav',
};
</script>
