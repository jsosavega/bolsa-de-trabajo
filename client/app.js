import Vue from 'vue'
import {sync} from 'vuex-router-sync'
import App from './components/App'
import router from './router'
import store from './store'
import VueResource from 'vue-resource'


sync(store, router)
Vue.config.devtools = true
Vue.use(VueResource);


Vue.http.options.root = 'http://hispanojobs.stamplayapp.com/api/cobject/v1';
// Vue.http.headers.common['Authorization'] = 'Basic YXBpOnBhc3N3b3Jk';

const app = new Vue({
  router,
  store,
  ...App
})

export {app, router, store}
