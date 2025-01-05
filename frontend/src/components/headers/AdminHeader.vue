<template>
  <header>
    <div class="flex items-center justify-between">
      <div>
        <h1 class="my-4 ml-4 font-bold">Panel Administratora</h1>
      </div>
      <AdminMobileNav class="my-4 mr-4" />
    </div>
    <div>
      <h2 class="mb-4 ml-4 font-semibold">{{ $route.name }}</h2>
    </div>
  </header>
</template>
<script>
import AdminMobileNav from '@/components/navs/AdminMobileNav.vue';
import router from '@/router';
export default {
  name: 'AdminHeader',
  components: {
    AdminMobileNav,
  },
};
</script>
