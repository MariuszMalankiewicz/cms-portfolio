<template>
  <section class="px-4 mt-[80px] font-Montserrat mb-12 pt-32">
    <h1
      class="text-[32px] sm:text-[44px] md:text-[52px] text-center font-bold text-dark-blue"
    >
      Kontakt
    </h1>
    <div
      class="flex flex-col items-center justify-center xl:flex-row xl:flex-wrap lg:space-x-12 2xl:space-x-24"
    >
      <img
        :src="ContactImage"
        class="w-[340px] sm:w-[400px] md:w-[440px] lg:w-[480px] xl:w-[520px] 2xl:w-[600px] mb-4"
        alt="Contact us-rafiki.png"
      />
      <div
        class="w-[95%] max-w-[500px] md:max-w-[600px] sm: xl:w-[450px] 2xl:w-[600px] text-[15px] sm:text-[16px] md:text-[17px]"
      >
        <form action="#">
          <label for="name" class="flex flex-col"
            ><p class="text-dark-gray">Imię i Nazwisko</p>
            <input
              type="text"
              placeholder="Imię i Nazwisko"
              class="border-b-2 placeholder:text-xs placeholder:ps-1 placeholder:pt-1 focus:text-dark-gray focus:text-text-sm text-dark-gray border-dark-gray focus:outline-none"
          /></label>
          <label for="email" class="flex flex-col mt-4"
            ><p class="text-dark-gray">Email</p>
            <input
              type="email"
              placeholder="Your email"
              class="border-b-2 placeholder:text-xs placeholder:ps-1 placeholder:pt-1 focus:text-dark-gray focus:text-text-sm text-dark-gray border-dark-gray focus:outline-none"
          /></label>
          <label for="message" class="flex flex-col mt-4"
            ><p class="text-dark-gray">Wiadomość</p>
            <textarea
              placeholder="Twoja Wiadomość"
              class="border-b-2 border-l-2 border-r-2 placeholder:text-xs placeholder:ps-2 placeholder:pt-1 focus:text-dark-gray focus:text-text-sm text-dark-gray focus:ps-1 rounded-b-md border-dark-gray focus:outline-none"
              cols="30"
              rows="5"
            ></textarea>
          </label>
          <PrimareButton class="mt-2 text-white hover:bg-dark-blue/90 bg-dark-blue"
            >Wyślij</PrimareButton
          >
        </form>
      </div>
    </div>
  </section>
</template>
<script>
import ContactImage from '@/assets/images/contact.png';
import PrimareButton from '@/components/UI/PrimareButton.vue';
export default {
  name: 'Contact',
  components: { PrimareButton },
  data() {
    return {
      ContactImage,
      PrimareButton,
    };
  },
};
</script>
