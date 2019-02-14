// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//import the vue instance
import Vue from 'vue'
//import the App component
import App from './App'
//import the vue router
import VueRouter from 'vue-router'
//tell vue to use the router
//import the hello component
import Hello from './components/HelloWorld'
//import the about component
import About from './components/About'
//import the Users component
import Users from './components/Users'
//import Bootstrap
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
//import axios
import axios from 'axios'
import VueAxios from 'vue-axios'


Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(VueAxios, axios);

//define your routes
const routes = [
  //define the root url of the application.
  { name: 'home', path: '/', component: Hello, meta: { title: 'Home' } },
  { path: '/home', redirect: '/' },
  { name: 'about', path: '/about', component: About, meta: { title: 'About' } },
  { path: '/about/', redirect: '/about' },
  { path: '/users', component: Users, meta: { title: 'Users' } },
  { name: 'users', path: '/users/:login', component: Users, meta: { title: 'user details' } },
  { path: "*", redirect: '/' }

]

// Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.

const router = new VueRouter({
  routes, // short for routes: routes
  mode: 'history'
})
// set document title //
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
});

//instatinat the vue instance
new Vue({
  //define the selector for the root component
  el: '#app',

  //pass the template to the root component
  template: '<App/>',
  //declare components that the root component can access
  components: { App },
  //pass in the router to the Vue instance
  router
}).$mount('#app')//mount the router on the app