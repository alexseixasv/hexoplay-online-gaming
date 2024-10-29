<template>
  <div class="bg-gradient-to-r from-mirage-950 via-mirage-900 to-mirage-950">
    <header class="flex items-center justify-between px-6 md:px-40 py-3 border-b border-slate-300/10">
      <div class="flex items-center space-x-4">
        <div class="flex items-center space-x-2 cursor-pointer">
          <a @click.prevent="goToHomepage"><img src="../assets/logos/app-logo-white.svg" alt="Logo" class="w-40"></a>
        </div>
        <button class="text-gray-400 text-sm px-2 py-1 bg-slate-800 rounded-lg border border-slate-700 hidden md:inline-block">
          v1.0.01
        </button>
      </div>

      <button @click="toggleMobileMenu" class="md:hidden text-gray-400 focus:outline-none">
        <i class="fas fa-bars text-2xl"></i>
      </button>

      <nav :class="['flex flex-col md:flex-row md:space-x-6 md:text-white md:static ml-0 sm:ml-12 fixed top-0 left-0 w-full h-full', mobileMenuOpen ? 'flex' : 'hidden md:flex']">
        <a href="#" class="block py-2 md:py-0 md:inline-block text-white hover:text-mirage-600">{{ $t('header.home') }}</a>
        <a href="#" class="block py-2 md:py-0 md:inline-block text-white hover:text-mirage-600">{{ $t('header.newgames') }}</a>
        <a href="#" class="block py-2 md:py-0 md:inline-block text-white hover:text-mirage-600">{{ $t('header.whoiswinning') }}</a>
        <a href="#" class="block py-2 md:py-0 md:inline-block text-white hover:text-mirage-600">{{ $t('header.blog') }}</a>
      </nav>

      <div class="flex items-center space-x-4">
        <button class="text-gray-400 hover:text-white">
          <i class="fas fa-moon"></i>
        </button>
        <ChangeLocale />
      </div>
    </header>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import ChangeLocale from './ChangeLocale.vue';

const router = useRouter();
const mobileMenuOpen = ref(false);

function goToHomepage() {
  router.push('/');
}

function toggleMobileMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value;
}
</script>

<style scoped>
/* Para ajustar o menu em dispositivos móveis */
@media (max-width: 767px) {
  .nav-link {
    padding: 1rem;
  }
}
</style>
