<template>
  <header
    class="fixed top-0 z-10 w-full px-4 pt-4 pb-2 bg-white shadow-sm lg:px-2 lg:p-8 lg:bg-gray-800 lg:text-gray-200"
  >
    <div
      class="flex flex-row items-center justify-between lg:justify-center lg:items-start lg:flex-col lg:ml-4"
    >
      <div>
        <h1 class="font-bold">Panel Administratora</h1>
      </div>
      <AdminMobileNav />
      <div
        class="hidden lg:block lg:w-[99%] lg:h-[1px] lg:my-3 bg-gray-400"
      ></div>
      <AdminSideNav />
    </div>
    <div>
      <h2 class="mt-4 font-semibold lg:hidden">{{ $route.name }}</h2>
    </div>
  </header>
</template>
<script>
import AdminMobileNav from '@/components/navs/AdminMobileNav.vue';
import AdminSideNav from '@/components/navs/AdminSideNav.vue';
import router from '@/router';
export default {
  name: 'AdminHeader',
  components: {
    AdminMobileNav,
    AdminSideNav,
  },
};
</script>
