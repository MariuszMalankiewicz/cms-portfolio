<template>
  <AdminHeader />
  <main>
    <router-view />
  </main>
</template>
<script>
import AdminHeader from '@/components/headers/AdminHeader.vue';
export default {
  name: 'AdminLayout',
  components: {
    AdminHeader,
  },
};
</script>
