<template>
  <div id="app">
    <!-- navbar-1.vue -->
    <b-navbar toggleable="md" type="dark" variant="info">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <!-- Left aligned nav items -->
      <b-navbar-brand href="#">
        <img width="50" height="50" src="./assets/192-1923042_github-icon-png-github-png.png">Github Users
      </b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">
        <!-- Right aligned nav items -->
        <!-- the router outlet, where all matched components would ber viewed -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item @click="$event.target.classList.add('active')">
            <router-link v-bind:to="'/'">Home</router-link>
          </b-nav-item>
          <b-nav-item @click="$event.target.classList.add('active')">
            <router-link v-bind:to="'/users'">Users</router-link>
          </b-nav-item>
          <b-nav-item @click="$event.target.classList.add('active')">
            <router-link v-bind:to="'/about'">About</router-link>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <!-- navbar-1.vue -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>
<!-- styling for the component -->
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
/* navbar */
.ml-auto a {
  width: 100%;
  height: 100%;
  color: #fff !important;
  text-decoration: none;
}
.navbar-dark .navbar-nav .nav-link {
  border: 2px solid #fff;
}
.active {
  border-bottom: 2px solid red;
}
.navbar img {
  border-radius: 40px;
  margin: 0 5px;
}
.bg-info {
  background-color: #004085 !important;
}
/*slider*/
</style>