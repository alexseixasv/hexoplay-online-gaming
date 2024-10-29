import { ref } from 'vue';

const balance = ref(10);

function updateBalance(amount) {
  balance.value += amount;
}

export function useBalance() {
  return { balance, updateBalance };
}
