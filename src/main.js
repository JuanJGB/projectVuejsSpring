import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueLogger from 'vuejs-logger';

const options = {
    isEnabled: true,
    logLevel : 'debug',
    stringifyArguments : false,
    showLogLevel : true,
    showMethodName : false,
    separator: '|',
    showConsoleColors: true
};

Vue.use(VueLogger, options);
Vue.config.productionTip = false;
Vue.use(BootstrapVue);

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');




