<template>
  <div id="app">
    <header>
      <b-navbar toggleable="xl" type="light" variant="info">
        <b-navbar-brand href="/"><img src="../src/assets/logo.png" alt="2m2k" width="120"></b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"><i class="demo-icon icon-menu"></i></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#">Start</b-nav-item>
            <b-nav-item href="#">Dania mięsne</b-nav-item>
            <b-nav-item href="#">Dania wegetariańskie</b-nav-item>
            <b-nav-item href="#">Słodkości</b-nav-item>
            <b-nav-item href="#">Przekąski</b-nav-item>
            <b-nav-item href="#">Dodatki do dań</b-nav-item>
            <b-nav-item href="#">Kontakt</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </header>
    <router-view/>
    <footer>2m2k &copy; Damian Paluchowski 2019</footer>
  </div>
</template>

<style>
  body
  {
    background: #ffffff;
    color: #2A363B;
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    margin: 0;
  }

  nav {
    padding: 7%;
    /*background-image: url('assets/photo-1495195134817-aeb325a55b65.jpeg'); !*Photo by Lukas Blazek on Unsplash*!*/
    background-image: url('https://images.unsplash.com/photo-1526046881250-dbec3e06414c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1868&q=80'); /*Photo by Lukas Blazek on Unsplash*/
    background-repeat: no-repeat;
    /*background-position: center top;*/
    background-size: cover;
    -webkit-box-shadow: 0 10px 39px -5px rgba(0,0,0,0.49);
    -moz-box-shadow: 0 10px 39px -5px rgba(0,0,0,0.49);
    box-shadow: 0 10px 39px -5px rgba(0,0,0,0.49);
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

  .nav-link {
    font-weight: bold;
    color: #000000 !important;
    font-size: 21px;
  }

  .nav-link:hover {
    color: darkgreen !important;
    /*-webkit-box-shadow: 0 0 5px 0 rgba(255,255,255,1);*/
    /*-moz-box-shadow: 0 0 5px 0 rgba(255,255,255,1);*/
    /*box-shadow: 0 0 5px 0 rgba(255,255,255,1);*/
  }

</style>
