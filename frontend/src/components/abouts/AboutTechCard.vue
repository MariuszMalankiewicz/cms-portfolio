<template>
  <div class="w-[80px] m-2 bg-gray-100 w rounded-2xl">
    <div class="w-[50%] pt-4 pb-1 mx-auto fill-gray-400">
      <slot name="first"></slot>
    </div>
    <p class="text-[12px] text-center pb-1"><slot name="secound"></slot></p>
  </div>
</template>
<script>
export default {
  name: 'TechCard',
};
</script>
