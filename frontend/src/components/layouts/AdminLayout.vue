<template>
  <AdminSideNav></AdminSideNav>
  <main>
    <router-view />
  </main>
</template>
<script>
import AdminSideNav from '@/components/navs/AdminSideNav.vue';
export default {
  name: 'AdminLayout',
  components: { AdminSideNav },
};
</script>
