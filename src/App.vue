<template>
  <div id="app">
    <header>
      <b-navbar toggleable="xl" type="light" variant="info">
        <b-navbar-brand>
          <router-link v-bind:to="'/'">
            <img src="../src/assets/logo.png" alt="2m2k" width="120">
          </router-link>
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse">
          <i class="demo-icon icon-menu"></i>
        </b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item>
              <router-link v-bind:to="'/'">Start</router-link>
            </b-nav-item>
            <b-nav-item>
              <router-link v-bind:to="'dania-miesne'">Dania mięsne</router-link>
            </b-nav-item>
            <b-nav-item>
              <router-link v-bind:to="'dania-wegetarianskie'">Dania wegetariańskie</router-link>
            </b-nav-item>
            <b-nav-item>
              <router-link v-bind:to="'slodkosci'">Słodkości</router-link>
            </b-nav-item>
            <b-nav-item>
              <router-link v-bind:to="'przekaski'">Przekąski</router-link>
            </b-nav-item>
            <b-nav-item>
              <router-link v-bind:to="'dodatki'">Dodatki</router-link>
            </b-nav-item>
            <b-nav-item>
              <router-link v-bind:to="'kontakt'">Kontakt</router-link>
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </header>
    <router-view/>
    <footer>2m2k &copy; Damian Paluchowski 2019</footer>
  </div>
</template>

<style>
body {
  background: #ffffff;
  color: #2a363b;
  font-family: "Montserrat", sans-serif;
  font-size: 18px;
  margin: 0;
}

nav {
  padding: 7%;
  background-image: url("../src/assets/toa-heftiba-662194-unsplash.jpg");
  /* Photo by Toa Heftiba on Unsplash */
  background-repeat: no-repeat;
  /*background-position: center top;*/
  background-size: cover;
  -webkit-box-shadow: 0 10px 39px -5px rgba(0, 0, 0, 0.49);
  -moz-box-shadow: 0 10px 39px -5px rgba(0, 0, 0, 0.49);
  box-shadow: 0 10px 39px -5px rgba(0, 0, 0, 0.49);
}

footer {
  margin-top: 22px;
  text-align: center;
  bottom: 0;
  width: 100%;
  height: 50px;
  line-height: 50px;
  background-color: #f5f5f5;
  color: darkgreen;
  font-weight: bold;
}
</style>
