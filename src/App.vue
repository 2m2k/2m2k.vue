<template>
  <div id="app">
    <!--<header>-->

      <nav class="navbar navbar-light navbar-expand-xl">

        <a class="navbar-brand" href="#"><img src="../src/assets/logo.png" alt="2m2k" width="120"></a>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainmenu" aria-controls="mainmenu" aria-expanded="false" aria-label="Przełącznik nawigacji">
          <i class="demo-icon icon-menu"></i>
        </button>

        <div class="collapse text-center navbar-collapse" id="mainmenu">

          <ul class="navbar-nav mr-auto">

            <li class="nav-item active">
              <a class="nav-link" href="#"> Start </a>
            </li>

            <!--<li class="nav-item dropdown">-->
            <!--<a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" role="button" aria-expanded="false" id="submenu" aria-haspopup="true"> Rozwijana opcja </a>-->

            <!--<div class="dropdown-menu" aria-labelledby="submenu">-->

            <!--<a class="dropdown-item" href="#"> Opcja 1 </a>-->
            <!--<a class="dropdown-item" href="#"> Opcja 2 </a>-->

            <!--<div class="dropdown-divider"></div>-->

            <!--<a class="dropdown-item" href="#"> Opcja 3 </a>-->
            <!--<a class="dropdown-item" href="#"> Opcja 4 </a>-->

            <!--</div>-->

            <!--</li>-->

            <li class="nav-item">
              <a class="nav-link" href="#"> Dania Mięsne </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#"> Dania wegetariańskie </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#"> Słodkości </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#"> Przekąski </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#"> Dodatki do dań </a>
            </li>

            <div class="dropdown-divider"></div>

            <li class="nav-item">
              <a class="nav-link" href="#"> O mnie </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#"> Kontakt </a>
            </li>

          </ul>

        </div>

      </nav>

    <!--</header>-->
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
    background-image: url('assets/photo-1495195134817-aeb325a55b65.jpeg'); /*Photo by Lukas Blazek on Unsplash*/
    background-repeat: no-repeat;
    /*background-position: center top;*/
    background-size: cover;
    -webkit-box-shadow: 0px 10px 39px -5px rgba(0,0,0,0.49);
    -moz-box-shadow: 0px 10px 39px -5px rgba(0,0,0,0.49);
    box-shadow: 0px 10px 39px -5px rgba(0,0,0,0.49);
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
    -webkit-box-shadow: 0px 0px 5px 0px rgba(255,255,255,1);
    -moz-box-shadow: 0px 0px 5px 0px rgba(255,255,255,1);
    box-shadow: 0px 0px 5px 0px rgba(255,255,255,1);
  }

</style>
