<template>
  <div class="grid grid-cols-1 mb-4">
    <div
      class="p-12 bg-cover bg-center rounded-lg w-full"
      :style="DiceBannerStyle"
    >
      <h3 class="text-mirage-500 font-extrabold">{{ $t('homegame.gamepage.dicebannertitle') }}</h3>
      <p class="text-white max-w-4xl">{{ $t('homegame.gamepage.dicebannerdescription') }}</p>
    </div>
  </div>  
  <div class="mx-auto p-6 bg-gray-800 text-white rounded-lg shadow-lg space-y-6">
    <h2 class="text-center text-2xl font-bold">{{ $t('homegame.gamepage.numberdeal') }}</h2>
    <div class="flex justify-between items-center bg-gray-800 p-4 rounded-md">
      <div class="text-center">
        <span class="text-4xl font-bold">{{ prediction }}%</span>
        <p class="text-gray-400">{{ $t('homegame.gamepage.winpercent') }}</p>
      </div>
      <div class="text-center bg-purple-700 p-6 rounded-xl">
        <span class="text-4xl font-bold text-white">{{ luckyNumber }}</span>
        <p class="text-white font-bold">{{ $t('homegame.gamepage.luckynumber') }}</p>
      </div>
    </div>
    <div class="space-y-4">
      <input
        type="range"
        min="1"
        max="100"
        v-model="prediction"
        class="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
      />
      <div class="flex justify-between text-gray-400">
        <span>1</span>
        <span>25</span>
        <span>{{ prediction }}</span>
        <span>75</span>
        <span>100</span>
      </div>
    </div>
    <div class="flex justify-between items-center space-x-4">
      <button @click="rollDice('menor')" class="w-1/2 py-3 bg-green-500 text-gray-900 font-semibold rounded-lg hover:bg-green-400 transition-all">
        {{ $t('homegame.gamepage.lessthan') }}
      </button>
      <button @click="rollDice('maior')" class="w-1/2 py-3 bg-gray-700 font-semibold rounded-lg hover:bg-gray-600 transition-all">
        {{ $t('homegame.gamepage.biggerthan') }}
      </button>
    </div>
    <div class="flex justify-between items-center bg-gray-800 p-4 rounded-md">
      <div class="text-center">
        <p class="text-gray-400">Multiplicador</p>
        <span class="text-xl font-bold">x{{ multiplier }}</span>
      </div>
      <div class="text-center">
        <p class="text-gray-400">Chance de Ganhar</p>
        <span class="text-xl font-bold">{{ winChance }}%</span>
      </div>
    </div>
    <div class="flex items-center space-x-4 bg-gray-800 p-4 rounded-md">
      <input
        type="number"
        min="1"
        v-model.number="betAmount"
        class="w-full p-2 bg-gray-700 border border-gray-600 rounded-lg text-white text-center"
        placeholder="Valor da Aposta"
      />
      <button @click="halveBet" class="px-3 py-2 bg-gray-700 rounded-lg">{{ $t('homegame.gamepage.half') }}</button>
      <button @click="doubleBet" class="px-3 py-2 bg-gray-700 rounded-lg">{{ $t('homegame.gamepage.double') }}</button>
    </div>
    <div class="text-center">
      <p v-if="result !== null" class="mt-4 text-xl font-bold" :class="{ 'text-mirage-500': result, 'text-red-400': !result }">
        {{ resultMessage }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useBalance } from '../Games/composables/useBalance.js';
import DiceBanner from '../../assets/images/dice-banner.jpg';

const DiceBannerStyle = computed(() => ({
  backgroundImage: `url(${DiceBanner})`,
}));

const prediction = ref(50);
const luckyNumber = ref(0);
const betAmount = ref(1);
const result = ref(null);
const resultMessage = ref("");
const { balance, updateBalance } = useBalance();

const multiplier = computed(() => (100 / prediction.value).toFixed(4));
const winChance = computed(() => (prediction.value).toFixed(0));

function rollDice(type) {
  if (betAmount.value > balance.value) {
    alert('Saldo insuficiente para realizar esta aposta.');
    return;
  }

  updateBalance(-betAmount.value);

  const lossMargin = 0.85;
  if (Math.random() < lossMargin) {
    luckyNumber.value = type === 'menor' ? prediction.value + 1 : prediction.value - 1;
  } else {
    luckyNumber.value = Math.floor(Math.random() * 100) + 1;
  }

  if ((type === 'menor' && luckyNumber.value <= prediction.value) || 
      (type === 'maior' && luckyNumber.value > prediction.value)) {
    const ganho = betAmount.value * multiplier.value;
    updateBalance(ganho);
    result.value = true;
    resultMessage.value = `Parabéns! Você ganhou U$ ${ganho.toFixed(2)}`;
  } else {
    result.value = false;
    resultMessage.value = "Infelizmente, você perdeu! Tente novamente.";
  }
}

function halveBet() {
  betAmount.value = Math.max(1, betAmount.value / 2);
}

function doubleBet() {
  betAmount.value *= 2;
}
</script>

<style scoped>
</style>
