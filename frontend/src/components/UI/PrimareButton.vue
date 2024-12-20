<template>
  <button
    class="px-4 py-2 text-[14px] lg:text-[16px] transition-all duration-150 ease-in-out rounded-md sm:px-6 hover:cursor-pointer"
  >
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: 'PrimareButton',
};
</script>
