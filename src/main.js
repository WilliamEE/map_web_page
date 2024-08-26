import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import VueParticles from "vue-particles";
import CoolLightBox from 'vue-cool-lightbox';
import VueScrollactive from 'vue-scrollactive';
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import '@fortawesome/fontawesome-free/css/all.css'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'
import './assets/scss/main.scss'
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';


Vue.config.productionTip = false;
Vue.use(VueParticles);
Vue.use(CoolLightBox);
Vue.use(VueScrollactive);
Vue.use(Toast);
new Vue({
    router,
    vuetify,
    store,
    render: h => h(App),
}).$mount('#app')