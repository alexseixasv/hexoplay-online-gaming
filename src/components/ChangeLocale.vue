<template>
  <div class="relative flex items-center space-x-1 md:space-x-0">
    <button @click="toggleDropdown" class="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-300 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
      <img :src="currentFlag" alt="Flag" class="h-5 w-5 rounded-full mr-2">
      <span>{{ currentLanguage }}</span>
      <svg class="w-4 h-4 ml-2 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
      </svg>
    </button>

    <!-- Dropdown -->
    <div v-if="dropdownOpen" class="z-50 absolute mt-24 w-full max-w-xs left-0 right-0 mx-auto bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700">
      <ul class="py-2 font-medium">
        <li v-for="(lang, key) in languages" :key="key">
          <a @click="changeLocale(key)" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
            <div class="inline-flex items-center">
              <img :src="lang.flag" class="h-3.5 w-3.5 rounded-full mr-2" alt="Flag">
              <span>{{ lang.name }}</span>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();
const dropdownOpen = ref(false);

const languages = {
  en: { name: 'English', flag: new URL('../assets/flags/us-flag.svg', import.meta.url).href },
  pt: { name: 'Português', flag: new URL('../assets/flags/pt-flag.svg', import.meta.url).href },
  es: { name: 'Español', flag: new URL('../assets/flags/es-flag.svg', import.meta.url).href },
};

const currentLanguage = ref(languages[locale.value].name);
const currentFlag = ref(languages[locale.value].flag);

function changeLocale(lang) {
  locale.value = lang;
  currentLanguage.value = languages[lang].name;
  currentFlag.value = languages[lang].flag;
  dropdownOpen.value = false; // Fecha o dropdown após a seleção
}

function toggleDropdown() {
  dropdownOpen.value = !dropdownOpen.value;
}
</script>

<style scoped>
/* Centraliza o dropdown e impede que ele saia dos limites da tela */
</style>
