import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router'
// import { BootstrapVue } from 'bootstrap-vue' 
import '../node_modules/jquery/dist/jquery.js';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import index from './components/index.vue'
import newBlog from './components/newBlog.vue'
import blogs from './components/blogs.vue'
import viewBlog from './components/viewBlog.vue'


// Vue.use(BootstrapVue)
Vue.use(VueResource);
Vue.use(VueRouter);
const routes = [
  {
    path: '/',
    component: index
  },
  {
    path: '/newBlog',
    component: newBlog
  },
  {
    path: '/blogs',
    component: blogs
  },
  {
    path: '/viewBlog/:id',
    component: viewBlog
  }
]
const router = new VueRouter({
  routes: routes,
  mode: "history"
});
Vue.config.productionTip = false

Vue.filter('lowercase', function(value){
  return value.toLowerCase();
});

Vue.filter('snippet', function(value){
  return value.slice(0,100) + '...';
})

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
