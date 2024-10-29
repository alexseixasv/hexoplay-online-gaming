import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router';
import { createI18n } from 'vue-i18n';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faEye, faEyeSlash, faDice, faGhost, faPepperHot, faLock, faFile, faCircleQuestion, faHeadset, faCoins, faArrowRightToBracket, faHouse, faBars } from '@fortawesome/free-solid-svg-icons';

library.add(faEye, faEyeSlash, faDice, faGhost, faPepperHot, faLock, faFile, faCircleQuestion, faHeadset, faCoins, faArrowRightToBracket, faHouse, faBars);

import en from './locales/en.json';
import pt from './locales/pt.json';
import es from './locales/es.json';

const i18n = createI18n({
  locale: 'pt', // idioma padrão
  fallbackLocale: 'en',
  messages: {
    en,
    pt,
    es
  },
  warnHtmlMessage: false,
});

const app = createApp(App);
app.use(i18n);
app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');