import Vue from 'vue';
import Vuer from 'vue-router';
import axios from 'axios'
import VueAxios from 'vue-axios'
import { sync } from 'vuex-router-sync';

Vue.use(VueAxios, axios)
Vue.use(Vuer);

import router from './router'
import store from './store'

// sync the router with the vuex store.
// this registers `store.state.route`
sync(store, router);

Vue.config.silent = true;
Vue.config.devtools = true;

import App from './App.vue';

Vue.filter('json', function (value) {
	return JSON.stringify(value)
})

const app = new Vue({
	el: '#app',
	store,
	router,
	render: a => a(App)
})