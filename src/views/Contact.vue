<template>
  <div>
    <div class="logo">
      <h1>Skontaktuj się ze nami!</h1>
    </div>
    <div class="container">
      <h2>Wyślij nam swój ulubiony przepis!</h2>
      <p>Jeśli chcesz, żeby twój przepis znalazł się na 2m2k.tk niezbędne elementy wiadomości email to:</p>
      <ol>
        <li>Lista wszystkich potrzebnych składników</li>
        <li>Krótki opis przygotowania dania</li>
        <li>Zdjęcia gotowego dania (oraz opcjonalnie zdjęcia potrawy w trakcie przygotowania)</li>
        <li>Upewnij się, że danie jest smaczne! :)</li>
      </ol>
      <h3>2m2kwebsite@gmail.com</h3>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line

export default {
  // eslint-disable-next-line
  name: "Contact"
  // eslint-disable-next-line
};
</script>

<style scoped>
.logo {
  /* background-image: url(../assets/rachel-park-366508-unsplash.jpg); */
  background-image: url(../assets/rachel-park-366508-unsplash.jpg);
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
  padding: 10vw 3vw 10vw 3vw;
  letter-spacing: 200%;
  font-weight: bold;
  font-family: "Dancing Script", cursive;
  margin-bottom: 3%;
}

h2 {
  text-shadow: 0 0 50px black;
}

h2,
p {
  text-align: center;
  margin-bottom: 40px;
}

h3 {
  text-align: center;
  margin-top: 50px;
  margin-bottom: 40px;
  font-size: 22px;
  font-weight: bold;
  text-shadow: 0 0 25px black;
}

.container {
  max-width: 500px;
}
</style>
