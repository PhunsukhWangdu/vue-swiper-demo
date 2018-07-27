import Vue from 'vue';
import App from './App.vue';
import SwiperTab from './components'

Vue.use(SwiperTab);

Vue.config.productionTip = false;

new Vue({
    render: h => h(App)
}).$mount('#app')
