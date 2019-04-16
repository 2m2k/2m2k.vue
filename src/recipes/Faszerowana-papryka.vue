<template>
  <div>
    <div class="container">
      <h4>Faszerowana papryka</h4>
      <img src="../assets/recipes/faszerowana-papryka.jpg" alt="Faszerowana papryka">
      <p></p>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line
  name: "Faszerowana-papryka"
  // eslint-disable-next-line
};
</script>

<style scoped>
img {
  width: 100%;
  max-width: 300px;
  box-shadow: 0 0 10px black;
  opacity: 0.7;
  margin-bottom: 10px;
}

img:hover {
  opacity: 0.8;
}

h4 {
  text-shadow: 0 0 5px #dddddd;
  font-weight: 300;
  margin-top: 5px;
  margin-bottom: 5px;
}

.container {
  box-shadow: 0 0 10px #dddddd;
  border: 50% solid black;
  max-width: 320px;
  margin-top: 5px;
}
</style>
