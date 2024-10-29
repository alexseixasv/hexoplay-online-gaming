<template>
  <div class="flex flex-col space-y-8">
    <div>
      <h2 class="text-white font-bold text-3xl lg:text-4xl leading-tight text-center sm:text-start">
        {{ $t('homepage.topgamesTitle') }}
      </h2>
      <p class="text-gray-300 text-md lg:text-lg text-center sm:text-start mt-2" v-html="$t('homepage.topgamesDescription')"></p>
    </div>

    <div class="space-y-6">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div
          class="p-4 bg-cover bg-center rounded-lg w-full"
          :style="bonusBannerStyle"
        >
          <h3 class="text-mirage-500 font-extrabold">{{ $t('homegame.gamepage.bonustitle') }}</h3>
          <p class="text-white max-w-80">{{ $t('homegame.gamepage.bonusdescription') }}</p>
        </div>
        <div
          class="p-4 bg-cover bg-center rounded-lg w-full"
          :style="DailyBonusBannerStyle"
        >
          <h3 class="text-mirage-500 font-extrabold">{{ $t('homegame.gamepage.dailybonustitle') }}</h3>
          <p class="text-white max-w-80">{{ $t('homegame.gamepage.dailybonusdescription') }}</p>
        </div>
      </div>

      <div>
        <FakeWinners />
      </div>

    </div>
  </div>
</template>

<script setup>
import FakeWinners from '../../components/FakeWinners.vue';
import BonusBanner from '../../assets/images/welcome-bonus.jpg';
import DailyBonusBanner from '../../assets/images/daily-bonus.jpg';
import { computed } from 'vue';

const bonusBannerStyle = computed(() => ({
  backgroundImage: `url(${BonusBanner})`,
}));

const DailyBonusBannerStyle = computed(() => ({
  backgroundImage: `url(${DailyBonusBanner})`,
}));
</script>
