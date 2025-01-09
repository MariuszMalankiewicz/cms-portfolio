<template>
  <AdminHeader class="lg:w-[25%] lg:h-[100vh]" />
  <main>
    <router-view class="lg:ml-[25%] lg:w-[75%]" />
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
