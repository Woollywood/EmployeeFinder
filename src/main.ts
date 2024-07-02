import { createApp } from 'vue';
import 'normalize.css';
import './assets/base.scss';
import App from './App.vue';

import { router } from './router/router';
import { store, key } from './store/employee';

const app = createApp(App);
app.use(router);
app.use(store, key);
app.mount('#app');
