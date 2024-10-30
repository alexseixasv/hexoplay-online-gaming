<template>
  <div v-if="isVisible" class="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto">
    <div class="fixed inset-0 bg-black opacity-50" @click="closeModal"></div>
    <div class="relative p-4 w-full max-w-md max-h-full">
      <div class="relative rounded-lg shadow bg-gray-700">
        <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-600">
          <h3 class="text-xl font-semibold text-white">
            {{ $t('modals.signup.title') }}
          </h3>
          <button type="button" class="text-gray-400 hover:text-white" @click="closeModal">
            <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4l6 6M4 10l6-6" />
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <div class="p-4 md:p-5">
          <form @submit.prevent="handleSignup" class="space-y-4">
            <div>
              <label for="username" class="block mb-2 text-sm font-medium text-white">{{ $t('modals.signup.username') }}</label>
              <input type="text" v-model="username" id="username" class="bg-gray-600 border border-gray-700 text-white rounded-lg w-full p-2.5" />
              <p v-if="errors.username" class="text-red-500 text-sm mt-1">{{ errors.username }}</p>
            </div>
            <div>
              <label for="email" class="block mb-2 text-sm font-medium text-white">{{ $t('modals.signup.email') }}</label>
              <input type="email" v-model="email" id="email" class="bg-gray-600 border border-gray-700 text-white rounded-lg w-full p-2.5" />
              <p v-if="errors.email" class="text-red-500 text-sm mt-1">{{ errors.email }}</p>
            </div>
            <div>
              <label for="password" class="block mb-2 text-sm font-medium text-white">{{ $t('modals.signup.password') }}</label>
              <div class="relative">
                <input :type="showPassword ? 'text' : 'password'" v-model="password" id="password" class="bg-gray-600 border border-gray-700 text-white rounded-lg w-full p-2.5" />
                <font-awesome-icon :icon="['fas', showPassword ? 'eye-slash' : 'eye']" class="absolute right-3 top-3 cursor-pointer text-white hover:text-mirage-500" @click="toggleShowPassword" />
              </div>
              <p v-if="errors.password" class="text-red-500 text-sm mt-1">{{ errors.password }}</p>
            </div>
            <div>
              <label for="confirm-password" class="block mb-2 text-sm font-medium text-white">{{ $t('modals.signup.confirmPassword') }}</label>
              <div class="relative">
                <input :type="showConfirmPassword ? 'text' : 'password'" v-model="confirmPassword" id="confirm-password" class="bg-gray-600 border border-gray-700 text-white rounded-lg w-full p-2.5" />
                <font-awesome-icon :icon="['fas', showConfirmPassword ? 'eye-slash' : 'eye']" class="absolute right-3 top-3 cursor-pointer text-white hover:text-mirage-500" @click="toggleShowConfirmPassword" />
              </div>
              <p v-if="errors.confirmPassword" class="text-red-500 text-sm mt-1">{{ errors.confirmPassword }}</p>
            </div>
            <button
              type="submit"
              :disabled="isButtonDisabled"
              class="w-full bg-mirage-600 text-white hover:bg-mirage-700 focus:ring-4 rounded-lg text-sm px-5 py-2.5 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {{ $t('modals.signup.button') }}
            </button>
            <div class="text-sm font-medium text-gray-300">
              {{ $t('modals.signup.alreadyRegistered') }}
              <a @click.prevent="goToLogin" class="text-mirage-500 hover:underline">{{ $t('modals.signup.login') }}</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignupModal',
  props: {
    isVisible: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      showPassword: false,
      showConfirmPassword: false,
      errors: {}
    };
  },
  computed: {
    isButtonDisabled() {
      return !this.username || !this.email || !this.password || !this.confirmPassword;
    }
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
    toggleShowPassword() {
      this.showPassword = !this.showPassword;
    },
    toggleShowConfirmPassword() {
      this.showConfirmPassword = !this.showConfirmPassword;
    },
    validateEmail(email) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
    },
    goToLogin() {
      this.closeModal();
      this.$router.push('/login');
    },
    handleSignup() {
      this.errors = {};
      
      if (!this.username) {
        this.errors.username = 'O nome de usuário é obrigatório.';
      } else if (this.username.toLowerCase() === 'admin') {
        this.errors.username = 'Este nome já está em uso.';
      }

      if (!this.email) {
        this.errors.email = 'O e-mail é obrigatório.';
      } else if (!this.validateEmail(this.email)) {
        this.errors.email = 'Por favor, insira um e-mail válido.';
      } else if (this.email.toLowerCase() === 'alexseixasv@gmail.com') {
        this.errors.email = 'Este e-mail já está em uso.';
      }

      if (!this.password) {
        this.errors.password = 'A senha é obrigatória.';
      } else if (this.password.length < 8) {
        this.errors.password = 'A senha deve ter pelo menos 8 caracteres.';
      }

      if (!this.confirmPassword) {
        this.errors.confirmPassword = 'A confirmação de senha é obrigatória.';
      } else if (this.confirmPassword !== this.password) {
        this.errors.confirmPassword = 'As senhas não coincidem.';
      }

      if (Object.keys(this.errors).length === 0) {
        console.log('User data:', {
          username: this.username,
          email: this.email,
          password: this.password,
          confirmPassword: this.confirmPassword
        });
        this.closeModal();
        this.$router.push('/games');
      }
    }
  }
};
</script>
