<template>
  <Header />
  <main>
    <router-view />
  </main>
  <PublicFooter />
</template>

<script>
import PublicFooter from '@/components/footers/PublicFooter.vue';
import Header from '@/components/headers/Header.vue';

export default {
  name: 'PublicLayout',
  components: {
    Header,
    PublicFooter,
  },
};
</script>
