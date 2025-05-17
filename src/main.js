import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';

// ✅ Import global CSS (Bootstrap, your custom styles)
import './assets/bootstrap/css/bootstrap.min.css';
import './assets/css/style.css';
// Add others as needed, like animations.css or font-awesome

createApp(App).use(router).mount('#app');
