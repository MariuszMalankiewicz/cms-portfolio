<template>
  <section class="pt-24 font-Montserrat">
    <div
      class="flex flex-col md:flex-row md:flex-wrap md:gap-x-[80px] justify-center items-center px-6 md:mt-[24px] lg:mt-[48px] xl:mt-[72px]"
    >
      <img
        :src="ManLooking"
        class="mt-16 w-[250px] sm:w-[320px] md:w-[420px] lg:w-[490px] xl:w-[560px]"
        alt="looking-man"
      />
      <div>
        <div class="mt-12 max-w-[350px] lg:max-w-[370px] xl:max-w-[410px]">
          <h3
            class="font-bold text-[22px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px]"
          >
            Cześć, nazywam się Mariusz Malankiewicz
          </h3>
          <p
            class="text-[16px] sm:text-[16px] md:text-[17px] lg:text-[18px] xl:text-[19px] sm:mt-[4px] md:leading-[30px]"
          >
            i jestem web developerem z pasją do tworzenia funkcjonalnych,
            nowoczesnych i estetycznych stron internetowych oraz aplikacji
            webowych. Mam doświadczenie zarówno w front-endzie, jak i
            back-endzie oraz bazach danych.
            <router-link to="/about"
              ><AnOutlinedMail
                class="underline transition-all duration-150 ease-in-out text-blue hover:text-blue/70"
                >czytaj wiecej</AnOutlinedMail
              ></router-link
            >
          </p>
        </div>
        <div
          class="flex flex-wrap justify-start items-center gap-[20px] mt-6 text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] mb-12"
        >
          <router-link to="/"
            ><AnOutlinedMail
              class="px-4 py-2 mt-4 text-white transition-all duration-150 ease-in-out rounded-md bg-blue sm:px-6 hover:cursor-pointer hover:bg-blue/90"
              >Zatrudnij Mnie</AnOutlinedMail
            ></router-link
          >
          <router-link to="/"
            ><AnOutlinedMail
              class="px-4 py-2 mt-4 text-white transition-all duration-150 ease-in-out rounded-md bg-gray-400/80 sm:px-6 hover:cursor-pointer hover:bg-gray-400"
              >Pobierz CV</AnOutlinedMail
            ></router-link
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ManLooking from '@/assets/images/man-looking.png';
export default {
  name: 'Home',
  data() {
    return {
      ManLooking,
    };
  },
};
</script>
