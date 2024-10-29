<template>
  <div class="bg-gray-900 rounded-xl overflow-hidden shadow-lg p-4 w-80">
    <h2 class="text-lime-500 text-center text-xl font-semibold mb-4">
      {{ gametitle }}
    </h2>
    <div class="h-40 w-full mb-4 rounded-md">
      <img :src="gameImage" alt="Game Image" class="h-full w-full object-cover rounded-md">
    </div>
    <div class="text-gray-300 text-sm space-y-2">
      <div class="flex justify-between">
        <span>{{ $t('betcard.minbet') }}</span>
        <span class="font-medium">{{ minbet }}</span>
      </div>
      <div class="flex justify-between">
        <span>{{ $t('betcard.maxbet') }}</span>
        <span class="font-medium">{{ maxbet }}</span>
      </div>
      <div class="flex justify-between">
        <span>{{ $t('betcard.maxprize') }}</span>
        <span class="font-medium">{{ maxprize }}</span>
      </div>
      <div class="flex justify-between">
        <span>{{ $t('betcard.winpercent') }}</span>
        <span class="font-medium">{{ winpercent }}</span>
      </div>
    </div>"
    <button class="bg-lime-500 text-mirage-900 font-semibold w-full py-2 mt-6 rounded-md hover:bg-lime-400 transition-all" @click="goToLogin()">
      {{ $t('betcard.button') }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'TopgamesCard',
  props: {
    gametitle: {
      type: String,
      required: true,
    },
    minbet: {
      type: String,
      required: true,
    },
    maxbet: {
      type: String,
      required: true,
    },
    maxprize: {
      type: [String, Number],
      required: true,
    },
    winpercent: {
      type: [String, Number],
      required: true,
    },
    gameImage: {
      type: String,
      required: true,
    },
  },

  methods:{
    goToLogin() {
      this.$router.push('/login');
    }
  }
};
</script>
