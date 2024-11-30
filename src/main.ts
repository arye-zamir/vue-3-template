import { createApp } from 'vue';
import { setupStore } from './store';

import './style/main.scss';

import App from './App.vue';

const app = createApp(App);

setupStore(app);

app.mount('#app');
