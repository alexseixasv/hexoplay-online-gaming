<template>
  <Header />
  <section>
    <div class="bg-gradient-to-r from-mirage-950 via-mirage-900 to-mirage-950 min-h-5/6 flex items-center justify-center p-8">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
        <div class="space-y-8">
          <h1 class="text-white font-bold text-4xl sm:text-5xl text-center sm:text-start">
            {{ $t('homepage.titleStart') }}
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-mirage-300 to-mirage-500 rounded-md">
              {{ $t('homepage.titleMiddle') }}
            </span>
            {{ $t('homepage.titleEnd') }}
          </h1>
          <p class="text-gray-300 text-base text-center sm:text-start" v-html="$t('homepage.description')"></p>
          <div class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <button class="bg-mirage-600 text-white font-bold px-6 py-3 rounded-lg shadow-md hover:bg-mirage-700 transition-all" @click="gotoLogin()">
              {{ $t('homepage.cta') }}
            </button>
            <button
              @click="showSignUpModal = true"
              class="bg-transparent text-white border-2 border-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-white hover:text-mirage-900 transition-all">
              {{ $t('components.button.signUp') }}
            </button>
          </div>
        </div>
        <div class="flex justify-center md:justify-end">
          <img src="../assets/characters/hero-homepage.png" alt="Hero Image" class="max-w-md w-full object-contain">
        </div>
      </div>
    </div>
  </section>
  <Separator />
  <section>
    <div class="bg-gradient-to-r from-mirage-950 via-mirage-900 to-mirage-950 py-12 lg:py-40 flex flex-col items-center justify-center">
      <div>
        <h2 class="text-white font-bold text-4xl leading-tight text-center">
          {{ $t('homepage.topgamesTitle') }}
        </h2>
        <p class="text-gray-300 text-lg text-center max-w-2xl mx-auto mt-4" v-html="$t('homepage.topgamesDescription')"></p>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        <TopgamesCard
          v-for="(game, index) in topGames"
          :key="index"
          :gametitle="game.gametitle"
          :minbet="game.minbet"
          :maxbet="game.maxbet"
          :maxprize="game.maxprize"
          :winpercent="game.winpercent"
          :buttonText="game.buttonText"
          :gameImage="game.gameImage"
        />
      </div>
    </div>
  </section>
  <section>
    <div class="bg-gradient-to-r from-mirage-950 via-mirage-900 to-mirage-950 flex flex-col items-center justify-center pb-12 lg:pb-40">
      <h2 class="text-white font-bold text-4xl leading-tight text-center">
        {{ $t('components.fakewinners.title') }}
      </h2>
      <p class="text-gray-300 text-lg text-center max-w-2xl mx-auto mt-4" v-html="$t('components.fakewinners.subtitle')"></p>
      <div class="w-5/6 mt-8">
        <FakeWinners />
      </div>
    </div>
  </section>
  <Footer />

  <SignupModal :isVisible="showSignUpModal" @close="showSignUpModal = false" />
</template>

<script setup>
import { ref } from 'vue';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import Separator from '../components/Separator.vue';
import TopgamesCard from '../components/TopgamesCard.vue';
import FakeWinners from '../components/FakeWinners.vue';
import SignupModal from '../components/SignupModal.vue';
import { useRouter } from 'vue-router';
import halloweenJackpot from '../assets/games/haloween-jackpot.jpg';
import ghostJackpot from '../assets/games/ghost-jackpot.jpg';
import DiceBattles from '../assets/games/dice-battles.jpg';

const showSignUpModal = ref(false);

const topGames = [
  {
    gametitle: 'Halloween Jackpot',
    minbet: 'R$0,25',
    maxbet: 'R$3,00',
    maxprize: 'R$375',
    winpercent: '15%',
    buttonText: 'Jogue agora',
    gameImage: halloweenJackpot
  },
  {
    gametitle: 'Dice Battles',
    minbet: 'R$0,25',
    maxbet: 'R$3,00',
    maxprize: 'R$375',
    winpercent: '15%',
    buttonText: 'Jogue agora',
    gameImage: DiceBattles
  },
  {
    gametitle: 'Ghost Glyph',
    minbet: 'R$0,25',
    maxbet: 'R$3,00',
    maxprize: 'R$375',
    winpercent: '15%',
    buttonText: 'Jogue agora',
    gameImage: ghostJackpot
  }
];

const router = useRouter();
function gotoLogin() {
  router.push('/login');
}

</script>
