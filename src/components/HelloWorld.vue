<template>
  <div>
    <div class="logo">
      <h1>Welocme to 2m2k</h1>
    </div>
    <div class="container">
      <h2>Szukasz prostych i smacznych przepisów?</h2>
      <p>
        Dobrze trafiłeś(aś)!
        <br>Strona ta jest zbiorem naszych ulubionych przepisów kulinarnych na potrawy/przekąski/dania, które smakowały nam najbardziej lub są idealne do przygotowania w małych kuchniach. Do tego właśnie nawiązuje nazwa strony: kuchnia o powierzchni dwóch metrów kwadratowych.
        <br>Zwykle potrawy te nie wymagają niesamowitych umiejętności kulinarnych, więc nawet jeśli potrafisz przypalić wodę na herbatę to i tak poradzisz sobie z przygotowaniem tychże dań :)
        <br>Z uwagi na to, iż baza przepisów nie jest ogromna, gorąco prosimy o podsyłanie Twoich (najlepiej ze zdjęciem). Szczegóły jak to zrobić, znajdziesz w zakładce
        <router-link class="routerlink" v-bind:to="'kontakt'">Kontakt</router-link>.
      </p>
    </div>
    <b-container class="bv-example-row">
      <h3>Najnowsze przepisy</h3>
      <b-row>
        <b-col>
          <router-link class="routerlink" v-bind:to="'faszerowana-papryka'">
            <Faszerowanapapryka/>
          </router-link>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// eslint-disable-next-line
import Faszerowanapapryka from "@/recipes/Faszerowana-papryka.vue";

export default {
  // eslint-disable-next-line
  name: "HelloWorld",
  components: {
    Faszerowanapapryka
  }
  // eslint-disable-next-line
};
</script>

<style scoped>
.logo {
  /* background-image: url(../assets/rachel-park-366508-unsplash.jpg); */
  background-image: url(../assets/brooke-lark-96398-unsplash.jpg);
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
}

h1 {
  text-align: center;
  color: white;
  font-size: 14vh;
  text-shadow: 0 0 15px black;
  padding: 5vw 3vw 5vw 3vw;
  letter-spacing: 200%;
  font-weight: bold;
  font-family: "Dancing Script", cursive;
}

.container {
  padding: 3vw 6vw 0 6vw;
  text-align: center;
}

h2 {
  display: inline-block;
  font-weight: 300;
  text-shadow: 0 0 5px #dddddd;
}

p {
  text-align: justify;
}

h3 {
  display: inline-block;
  text-shadow: 0 0 5px #dddddd;
  font-weight: 300;
}

.routerlink {
  font-size: 18px;
}
</style>
