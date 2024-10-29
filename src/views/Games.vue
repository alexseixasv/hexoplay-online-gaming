<template>
  <div class="flex min-h-screen">
    <!-- Toggle Button for Mobile -->
    <button
      @click="toggleSidebar"
      class="fixed top-4 left-4 z-50 p-2 rounded-md bg-gray-800 text-white sm:hidden"
    >
      <font-awesome-icon :icon="['fas', 'bars']" />
    </button>


    <aside
      :class="{
        'translate-x-0': isSidebarOpen,
        '-translate-x-full': !isSidebarOpen,
      }"
      class="fixed top-0 left-0 z-40 w-64 h-full transition-transform bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 sm:translate-x-0"
      aria-label="Sidenav"
    >
      <div class="overflow-y-auto py-5 px-3 h-full">
        <div class="flex items-center cursor-pointer pb-6 pt-12 sm:pt-0">
          <a @click.prevent="goToMain"><img src="../assets/logos/app-logo-white.svg" alt="Logo" class="w-36"></a>
        </div>
        <ul class="space-y-2">
          <li
            v-for="(item, index) in menuItems"
            :key="index"
            :class="{
              'text-mirage-500': activeItem === item.name,
              'text-white hover:text-mirage-500 bg-transparent hover:bg-gray-700 text-base font-normal rounded-lg': true
            }"
          >
            <a href="#" class="flex items-center p-2 group" @click.prevent="setActive(item)">
              <font-awesome-icon :icon="item.icon" />
              <span class="ml-3">{{ item.label }}</span>
            </a>
          </li>
        </ul>
        <ul class="pt-5 mt-5 space-y-2 border-t border-gray-700">
          <li
            v-for="(item, index) in footerItems"
            :key="index"
            :class="{
              'text-mirage-500': activeItem === item.name,
              'text-white hover:text-mirage-500 bg-transparent hover:bg-gray-700 text-base font-normal rounded-lg': true
            }"
          >
            <a href="#" class="flex items-center p-2 group" @click.prevent="setActive(item)">
              <font-awesome-icon :icon="item.icon" />
              <span class="ml-3">{{ item.label }}</span>
            </a>
          </li>
        </ul>
        <div class="pt-5 mt-5 space-y-2 border-t border-gray-700">
          <ChangeLocale />
        </div>
      </div>
      <div class="absolute bottom-0 left-0 p-4 space-x-4 w-full bg-white dark:bg-gray-800 z-20 border-r border-gray-200 dark:border-gray-700">
        <ul>
          <li class="text-white hover:text-mirage-500 bg-transparent hover:bg-gray-700 text-base font-normal rounded-lg cursor-pointer">
            <a href="#" class="flex items-center p-2 group">
              <font-awesome-icon :icon="['fas', 'coins']" class="text-amber-400" />
              <span class="ml-3">{{ $t('homegame.sidemenu.balance') }}</span>
              <span class="ml-3">{{ balance }}</span>
              <span class="ml-1">{{ $t('homegame.sidemenu.currency') }}</span>
            </a>
          </li>
          <li class="text-white hover:text-mirage-500 bg-transparent hover:bg-gray-700 text-base font-normal rounded-lg cursor-pointer">
            <a @click.prevent="logout()" class="flex items-center p-2 group">
              <font-awesome-icon :icon="['fas', 'arrow-right-to-bracket']" />
              <span class="ml-3">{{ $t('homegame.sidemenu.logout') }}</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>

    <!-- Main Content Area -->
    <div class="flex-1 ml-0 sm:ml-64 bg-gradient-to-r from-mirage-950 via-mirage-900 to-mirage-950 p-10">
      <component :is="activeComponent" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useBalance } from '../components/Games/composables/useBalance.js';
import ChangeLocale from '../components/ChangeLocale.vue';
import HomeComponent from '../components/Games/HomeComponent.vue';
import DiceComponent from '../components/Games/DiceComponent.vue';
import JackpotComponent from '../components/Games/JackpotComponent.vue';
import GhostComponent from '../components/Games/GhostComponent.vue';

const router = useRouter();
const activeItem = ref('');
const activeComponent = ref(HomeComponent);
const isSidebarOpen = ref(false);

const menuItems = [
  { name: 'home', label: 'Início', icon: ['fas', 'house'], component: HomeComponent },
  { name: 'dice', label: 'Dice Battles', icon: ['fas', 'dice'], component: DiceComponent },
  { name: 'jackpot', label: 'Halloween Jackpot', icon: ['fas', 'pepper-hot'], component: JackpotComponent },
  { name: 'ghost', label: 'Ghost Glyph', icon: ['fas', 'ghost'], component: GhostComponent }
];

const footerItems = [
  { name: 'terms', label: 'Terms', icon: ['fas', 'file'], component: HomeComponent },
  { name: 'privacy', label: 'Privacy', icon: ['fas', 'lock'], component: HomeComponent },
  { name: 'faq', label: 'FAQ', icon: ['fas', 'circle-question'], component: HomeComponent },
  { name: 'help', label: 'Help', icon: ['fas', 'headset'], component: HomeComponent }
];

function setActive(item) {
  activeItem.value = item.name;
  activeComponent.value = item.component;
  isSidebarOpen.value = false; // Fecha a sidebar após seleção
}

function toggleSidebar() {
  isSidebarOpen.value = !isSidebarOpen.value;
}

const { balance } = useBalance();

function goToMain() {
  router.push('/games');
}

function logout() {
  router.push('/');
}
</script>

<style scoped>
</style>
