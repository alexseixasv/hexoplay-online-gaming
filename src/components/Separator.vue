<template>
    <section class="relative overflow-hidden bg-gradient-to-r from-mirage-500 to-mirage-700 pb-9 pt-3">
      <div
        class="absolute whitespace-nowrap text-white font-bold text-base tracking-wide w-full flex justify-center"
        :style="{ transform: `translateX(${scrollPosition}px)` }"
      >
        <!-- Repetindo o texto pelo menos 40 vezes -->
        <span v-for="n in 40" :key="n">
          {{ $t('components.separator.text') }} &nbsp;&nbsp;
        </span>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        scrollPosition: 0,
      };
    },
    methods: {
      handleScroll() {
        // Ajuste a velocidade do movimento ao fazer o scroll
        this.scrollPosition = window.scrollY * -0.5; // Velocidade ajustável
      },
    },
    mounted() {
      window.addEventListener("scroll", this.handleScroll);
    },
    beforeDestroy() {
      window.removeEventListener("scroll", this.handleScroll);
    },
  };
  </script>