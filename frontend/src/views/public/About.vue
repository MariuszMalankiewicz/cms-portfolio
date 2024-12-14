<template>
  <section class="px-4 mt-[80px] font-Montserrat pt-32">
    <h1
      class="text-[32px] sm:text-[44px] md:text-[52px] text-center font-bold text-blue"
    >
      O Mnie
    </h1>
    <div
      class="flex flex-col items-center justify-center mt-12 lg:flex-row lg:flex-wrap lg:space-x-12 2xl:space-x-24 2xl:mt-24"
    >
      <img
        :src="DeveloperActivity"
        class="w-[340px] sm:w-[400px] md:w-[440px] lg:w-[480px] xl:w-[520px] 2xl:w-[600px] mb-4"
        alt="work in progress"
      />
      <div
        class="max-w-[400px] sm:max-w-[450px] md:max-w-[600px] lg:max-w-[650px] text-[15px] sm:text-[16px] md:text-[17px] mb-12"
      >
        <h3 class="font-bold text-[19px] sm:text-[24px] md:text-[28px]">
          Hi, i'm Malankiewicz
        </h3>
        <p class="leading-[24px] sm:leading-[28px] md:leading-[32px]">
          and I am a web developer with a passion for creating functional,
          modern, and aesthetically pleasing websites and web applications. I
          have experience working with front-end technologies such as HTML5,
          CSS3, Tailwind, Bootstrap, JavaScript, Vue.js, as well as back-end
          technologies like PHP and Laravel, and databases such as MySQL and
          SQLite. In my daily work, I follow principles of responsiveness,
          performance, and clean code organization, allowing me to deliver
          solutions that meet high user expectations. My goal is continuous
          growth and the pursuit of innovative solutions that streamline the
          development process and improve the quality of the projects I work on.
          I value clean application architecture and attention to visual details
          that enhance the user experience. I always strive to stay up-to-date
          with the latest trends in web technologies, learning new frameworks,
          tools, and methods. I believe that through constant skill development
          and teamwork, I am capable of tackling any challenge. Feel free to
          explore my projects and contact me for collaboration opportunities!
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import DeveloperActivity from '@/assets/images/developer-activity.png';
export default {
  name: 'About',
  data() {
    return {
      DeveloperActivity,
    };
  },
};
</script>
