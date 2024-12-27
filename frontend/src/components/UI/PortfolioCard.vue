<template>
  <div
    class="border-[1.5px] max-w-[480px] text-start transition-all duration-300 ease-in-out"
  >
    <img :src="project.imageSrc" alt="Card Image" />
    <h3 class="px-4 pt-6 pb-2 font-bold text-[19px] sm:text-[24px]">
      {{ project.title }}
    </h3>
    <p class="pl-4 leading-[26px] text-[13px] sm:text-[14px] font-semibold">
      {{ project.year }}
    </p>
    <p class="px-4 pb-2 leading-[26px] text-[13px] sm:text-[14px]">
      {{ project.technology }}
    </p>
    <p class="px-4 text-[15px] sm:text-[16px]">{{ project.description }}</p>
    <div class="flex flex-wrap mt-4 mb-6 ml-4 space-y-4">
      <a
        :href="project.live"
        target="_blank"
        class="px-4 py-2 mt-4 mr-4 text-white rounded-md bg-blue/90"
        >Demo</a
      >
      <a
        :href="project.github"
        target="_blank"
        class="border-[1.5px] border-gray-300 text-gray-500 rounded-md px-4 py-2"
        >Github</a
      >
    </div>
  </div>
</template>
<script>
export default {
  name: 'PortfolioCard',
  props: {
    project: {
      type: Object,
      Required: true,
    },
  },
};
</script>
