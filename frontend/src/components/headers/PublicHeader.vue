<template>
  <header class="fixed top-0 z-10 w-full px-4 py-8 bg-white shadow-sm lg:p-8">
    <div class="flex flex-row lg:flex-row md:items-center">
      <div class="w-full lg:w-1/3">
        <p class="text-[16px]">Web Developer</p>
        <h2 class="font-semibold text-[18px]">Mariusz Malankiewicz</h2>
      </div>
      <PublicMobileNav />
      <PublicTopNav />
    </div>
  </header>
</template>

<script>
import PublicMobileNav from '@/components/navs/PublicMobileNav.vue';
import PublicTopNav from '@/components/navs/PublicTopNav.vue';
export default {
  name: 'PublicHeader',
  components: {
    PublicTopNav,
    PublicMobileNav,
  },
};
</script>
