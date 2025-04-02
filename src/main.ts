import { createApp } from 'vue';
import { setupStore } from './store';
import router from './router';
import './style/main.css';

import App from './App.vue';

const app = createApp(App);
app.use(router);

setupStore(app);
app.mount('#app');
