<template>
  <img :src="WaveUp" class="bg-white" alt="" />
  <section
    class="flex flex-col items-center w-full py-10 text-white font-Montserrat bg-blue sm:py-12 md:py-14 lg:py-16 xl:py-18 2xl:py-20"
  >
    <div
      class="flex flex-wrap items-center justify-center space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-10 xl:space-x-12 2xl:space-x-14 text-[16px] sm:text-[18px] lg:text-[20px]"
    >
      <router-link
        to="/about"
        class="text-white transition-all duration-150 ease-in-out hover:underline hover:font-bold"
        >O Mnie</router-link
      >
      <router-link
        to="/portfolio"
        class="text-white transition-all duration-150 ease-in-out hover:underline hover:font-bold"
        >Projekty</router-link
      >
      <router-link
        to="/contact"
        class="text-white transition-all duration-150 ease-in-out hover:underline hover:font-bold"
        >Kontakt</router-link
      >
    </div>
    <hr
      class="w-3/4 max-w-[240px] sm:max-w-[260px] md:max-w-[280px] lg:max-w-[300px] xl:max-w-[320px] 2xl:max-w-[340px] h-1 my-6 sm:my-8 md:my-10 lg:my-12"
    />
    <div
      class="flex items-center space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-10 xl:space-x-12 2xl:space-x-14 text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px]"
    >
      <a
        href="https://linkedin.com/in/mariusz-malankiewicz"
        target="_blank"
        class="p-2 bg-white rounded-full"
        ><img
          :src="LinkedinIcons"
          class="w-8 text-blue"
          alt="linkedin-brands-solid"
        />
      </a>
      <a
        href="https://github.com/MariuszMalankiewicz"
        target="_blank"
        class="p-2 bg-white rounded-full"
        ><img
          :src="GithubIcons"
          class="w-8 text-black"
          alt="github-brands-solid"
        />
      </a>
    </div>
    <p
      class="pt-6 sm:pt-8 md:pt-10 lg:pt-12 text-[12px] sm:text-[14px] md:text-[16px] lg:text"
    >
      © 2024 Mariusz. Wszelkie prawa zastrzeżone.
    </p>
  </section>
</template>

<script>
import WaveUp from '@/assets/svgs/wave_up.svg';
import GithubIcons from '@/assets/svgs/github-brands-solid.svg';
import LinkedinIcons from '@/assets/svgs/linkedin-brands-solid.svg';
export default {
  name: 'PublicFooter',
  data() {
    return {
      WaveUp,
      GithubIcons,
      LinkedinIcons,
    };
  },
};
</script>
