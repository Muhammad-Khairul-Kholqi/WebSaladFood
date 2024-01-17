import { createApp  } from 'vue';
import App from './App.vue';
// bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
// bootstrap icons
import 'bootstrap-icons/font/bootstrap-icons.css';
// AOS
import AOS from 'aos';
import 'aos/dist/aos.css'; 


AOS.init();
createApp(App).mount('#app')
