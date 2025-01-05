<template>
  <PublicHeader />
  <main>
    <router-view />
  </main>
  <PublicFooter />
</template>

<script>
import PublicHeader from '@/components/headers/PublicHeader.vue';
import PublicFooter from '@/components/footers/PublicFooter.vue';

export default {
  name: 'PublicMobileNav',
  components: {
    PublicHeader,
    PublicFooter,
  },
};
</script>
