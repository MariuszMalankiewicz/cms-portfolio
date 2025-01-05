<template>
  <section class="pt-24"></section>
  <div
    class="lg:shadow-2xl w-full lg:w-[90%] xl:w-[1200px] lg:h-[500px] xl:h-[600px] mx-auto mt-12 lg:mt-24 md:mb-[70px] lg:mb-12 flex lg:flex-row flex-col items-center lg:items-stretch"
  >
    <div
      class="flex items-center justify-center w-[80%] md:max-w-[500px] lg:max-w-[100%] lg:w-1/2"
    >
      <img :src="LoginImage" alt="login image" class="w-full" />
    </div>
    <div class="w-full pb-8 bg-white lg:w-1/2 lg:bg-dark-blue">
      <div class="w-[75%] mx-auto">
        <h1
          class="text-black lg:text-white text-[28px] sm:text-[30px] lg:text-[40px] xl:text-[46px] font-bold text-start pt-6 lg:pt-12"
        >
          Zaloguj się!
        </h1>
        <form @submit.prevent="login">
          <input
            id="email"
            v-model="email"
            type="email"
            name="email"
            placeholder="Twój email"
            required
            class="w-full block py-1.5 px-4 mt-6 lg:rounded-2xl border-b-[2px]"
          />
          <input
            id="password"
            v-model="password"
            type="password"
            name="password"
            placeholder="Twoje hasło"
            required
            class="w-full block py-1.5 px-4 mt-6 lg:rounded-2xl border-b-[2px]"
          />
          <p class="mt-3 font-bold text-red-600">{{ error }}</p>
          <BaseButton
            type="submit"
            class="block mt-6 font-semibold text-center text-white cursor-pointer lg:text-black bg-dark-blue lg:bg-white lg:hover:bg-white/80 rounded-2xl"
            >Zaloguj się</BaseButton
          >
        </form>
        <p class="mt-6 text-gray-800 lg:mt-4 lg:text-white">
          Nie pamiętasz hasła?
          <a
            href="/#"
            class="font-bold underline text-dark-blue lg:text-white lg:hover:text-white/90"
            >Odzyskaj je</a
          >
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import LoginImage from '@/assets/images/Tablet login-rafiki.png';
import BaseButton from '@/components/buttons/BaseButton.vue';
import apiClient from '@/services/api.js';

export default {
  name: 'Login',
  components: { BaseButton },
  data() {
    return {
      LoginImage,
      BaseButton,
      email: '',
      password: '',
      error: '',
    };
  },
  methods: {
    async login() {
      try {
        const response = await apiClient.post('/auth/login', {
          email: this.email,
          password: this.password,
        });
        localStorage.setItem('token', response.data.access_token);
        this.$router.push('/');
      } catch (error) {
        this.error = 'Niepoprawne dane';
      }
    },
  },
};
</script>
