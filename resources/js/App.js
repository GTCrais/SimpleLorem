
require('./bootstrap/libraries.js');

Vue.use(VueCookie);
Vue.use(VueClipboard);
Vue.use(Vuex);

window.eventHub = new Vue();

import ComponentManager from './services/ComponentManager.js';
import StoreManager from './services/StoreManager.js';

window.store = StoreManager.setupStore();
ComponentManager.registerComponents();

window.eventHub = new Vue();

const app = new Vue({

	el: '#vue-wrapper',
	store: store

});