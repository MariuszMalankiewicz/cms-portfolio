<template>
  <PublicHeader />
  <main>
    <router-view />
  </main>
  <PublicFooter />
</template>

<script>
import PublicFooter from '@/components/layouts/public/partials/PublicFooter.vue';
import PublicHeader from '@/components/layouts/public/partials/PublicHeader.vue';

export default {
  name: 'PublicLayout',
  components: {
    PublicHeader,
    PublicFooter,
  },
};
</script>
