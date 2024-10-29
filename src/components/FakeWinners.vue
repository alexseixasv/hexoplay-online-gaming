<template>
  <div class="bg-mirage-900 p-6 rounded-lg shadow-lg overflow-auto">
    <div class="flex space-x-2 mb-4">
      <button class="bg-mirage-600 text-white py-1 px-4 rounded-md">{{ $t('components.fakewinners.allprizes') }}</button>
      <button class="bg-gray-700 text-gray-300 py-1 px-4 rounded-md">{{ $t('components.fakewinners.bigprizes') }}</button>
      <button class="bg-gray-700 text-gray-300 py-1 px-4 rounded-md">{{ $t('components.fakewinners.rareprizes') }}</button>
    </div>
    <table class="w-full text-left text-gray-300">
      <thead>
        <tr class="border-b border-gray-600">
          <th class="py-2">Hora</th>
          <th class="py-2">Jogador</th>
          <th class="py-2">Valor da Aposta</th>
          <th class="py-2">Multiplicador</th>
          <th class="py-2">Prêmio</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(winner, index) in winners"
          :key="index"
          class="border-b border-gray-700"
        >
          <td class="py-2">{{ winner.time }}</td>
          <td class="py-2">{{ winner.player }}</td>
          <td class="py-2">{{ winner.betAmount.toFixed(4) }}</td>
          <td class="py-2">{{ `x${winner.multiplier.toFixed(4)}` }}</td>
          <td class="py-2">{{ winner.payout.toFixed(4) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      winners: [],
    };
  },
  methods: {
    generateRandomWinner() {
      const players = [
        "Annette", "arnholegetaway", "uppersycamore", "ceriumchance",
        "appendageducktail", "walmartworking", "allocatesjealous",
        "twinspartners", "provincialaxially", "ensureoversized"
      ];
      const randomPlayer =
        players[Math.floor(Math.random() * players.length)];

      const betAmount = parseFloat((Math.random() * 100 + 0.01).toFixed(4));
      const multiplier = parseFloat((Math.random() * 50 + 1).toFixed(4));
      const payout = parseFloat((betAmount * multiplier).toFixed(4));
      const time = new Date().toLocaleTimeString();

      return {
        time,
        player: randomPlayer,
        betAmount,
        multiplier,
        payout,
      };
    },
    addRandomWinner() {
      const newWinner = this.generateRandomWinner();
      this.winners.unshift(newWinner); // Adiciona ao topo
      if (this.winners.length > 10) {
        this.winners.pop(); // Mantém a lista com no máximo 20 itens
      }
    },
  },
  mounted() {
    // Gera alguns vencedores iniciais
    for (let i = 0; i < 10; i++) {
      this.addRandomWinner();
    }
    // Adiciona um novo vencedor a cada 3 segundos
    this.interval = setInterval(this.addRandomWinner, 3000);
  },
  beforeDestroy() {
    clearInterval(this.interval); // Limpa o intervalo ao desmontar o componente
  },
};
</script>
