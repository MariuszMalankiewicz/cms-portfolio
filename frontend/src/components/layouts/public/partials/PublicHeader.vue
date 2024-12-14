<template>
  <header class="fixed z-10 w-full px-4 py-8 bg-white shadow-md lg:p-10">
    <div class="flex flex-row lg:flex-row md:items-center">
      <div class="w-full lg:w-1/3">
        <p class="text-[16px]">Web Developer</p>
        <h2 class="font-semibold text-[18px]">Mariusz Malankiewicz</h2>
      </div>
      <PublicNavigation />
    </div>
  </header>
</template>

<script>
import PublicNavigation from '@/components/layouts/public/partials/PublicNavigation.vue';
export default {
  name: 'PublicHeader',
  components: {
    PublicNavigation,
  },
};
</script>
