<template>
  <section class="pt-24 font-Montserrat">
    <div
      class="flex flex-col md:flex-row md:flex-wrap md:gap-x-[80px] justify-center items-center px-6 md:mt-[24px] lg:mt-[48px] xl:mt-[72px]"
    >
      <img
        :src="ManLooking"
        class="mt-16 w-[300px] sm:w-[350px] lg:w-[450px] xl:w-[500px] 2xl:w-[550px] 2xl:mr-10"
        alt="looking-man"
      />
      <div>
        <div class="mt-12 max-w-[350px] lg:max-w-[400px] 2xl:max-w-[450px]">
          <p class="text-[22px] sm:text-[28px] font-bold">Cześć!</p>
          <p class="text-[16px] sm:text-[18px]">
            Nazywam się
            <span class="font-bold text-[18px] sm:text-[20px]"
              >Mariusz Malankiewicz</span
            >.
          </p>
          <p
            class="text-[16px] lg:text-[18px] leading-[28px] lg:leading-[32px] text-justify"
          >
            Jestem web developerem z pasją do tworzenia funkcjonalnych,
            nowoczesnych i estetycznych stron internetowych oraz aplikacji
            webowych. Mam doświadczenie zarówno w front-endzie, jak i
            back-endzie oraz bazach danych.
            <router-link to="/about"
              ><p
                class="underline transition-all duration-150 ease-in-out text-dark-blue hover:text-dark-blue/70"
              >
                czytaj wiecej
              </p></router-link
            >
          </p>
        </div>
        <div
          class="flex flex-wrap justify-start items-center gap-[20px] mt-6 text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] mb-12"
        >
          <router-link to="/portfolio"
            ><BaseButton class="text-white hover:bg-dark-blue/90 bg-dark-blue"
              >Zobacz Projekty</BaseButton
            ></router-link
          >
          <BaseButton class="text-white bg-gray-300 hover:bg-gray-400/80">
            <a href="/frontend-dist/Mariusz Malankiewicz CV.pdf" download
              >Pobierz CV</a
            >
          </BaseButton>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ManLooking from '@/assets/images/man-looking.png';
import BaseButton from '@/components/buttons/BaseButton.vue';
export default {
  name: 'Home',
  components: { BaseButton },
  data() {
    return {
      ManLooking,
      BaseButton,
    };
  },
};
</script>
