<template>
    <div class="flex flex-col">
        <Header />
        <section>
        <div class="bg-gradient-to-r from-mirage-950 via-mirage-900 to-mirage-950 min-h-screen flex items-center justify-center p-8">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div class="space-y-8">
                <img src="../assets/logos/app-logo-white.svg" alt="Logo" class="w-40 hidden md:flex">
                <h1 class="text-white font-bold text-5xl leading-tight">
                {{ $t('login.titleStart') }}
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-mirage-300 to-mirage-500 rounded-md">{{ $t('login.titleMiddle') }} </span>
                {{ $t('login.titleEnd') }}
                </h1>
                <p class="text-gray-300 text-lg" v-html="$t('homepage.description')"></p>
            </div>
            <div class="w-full mx-auto rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    {{ $t('login.subtitle') }}
                </h1>
                <form @submit.prevent="handleLogin" class="space-y-4 md:space-y-6">
                    <div>
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ $t('login.email') }}</label>
                    <input
                        v-model="email"
                        type="email"
                        name="email"
                        id="email"
                        class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="email@provider.com"
                        required
                    />
                    </div>
                    <div>
                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ $t('login.password') }}</label>
                    <input
                        v-model="password"
                        type="password"
                        name="password"
                        id="password"
                        placeholder="••••••••"
                        class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                    />
                    </div>
                    <button
                    :disabled="isButtonDisabled"
                    type="submit"
                    class="w-full text-white bg-mirage-600 hover:bg-mirage-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                    {{ $t('login.button') }}
                    </button>
                    <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                    {{ $t('login.noAccount') }} <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500">{{ $t('login.clickHere') }}</a>
                    </p>
                </form>
                </div>
            </div>
            </div>
        </div>
        </section>
        <Footer />
    </div>
</template>
  
<script setup>
  import { ref, computed } from 'vue';
  import { useRouter } from 'vue-router';
  import Header from '../components/Header.vue';
  import Footer from '../components/Footer.vue';
  
  const router = useRouter();
  const email = ref('');
  const password = ref('');
  
  const isButtonDisabled = computed(() => !email.value || !password.value);
  
  function handleLogin() {
    if (!isButtonDisabled.value) {
      router.push('/games');
    }
  }
</script>  