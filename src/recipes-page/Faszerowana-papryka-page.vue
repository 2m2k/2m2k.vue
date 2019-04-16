<template>
  <div class="container">
    <faszerowanapapryka/>
    <ul>
      <li style="list-style: none;">
        <strong>Składniki:</strong>
      </li>
      <li>5 papryk</li>
      <li>500 g mielonego mięsa</li>
      <li>2 łyżki oliwy</li>
      <li>1 cebula</li>
      <li>500 g pieczarek</li>
      <li>3 ząbki czosnku</li>
      <li>2 łyżki posiekanej natki</li>
      <li>150-200 g ryżu</li>
      <li>1 jajko</li>
      <li>2 łyżki koncentratu pomidorowego</li>
      <li>100 g żółtego sera</li>
      <li>1 pomidor</li>
    </ul>
    <ol>
      <li style="list-style: none;">
        <strong>Przygotowanie</strong>
      </li>
      <li>Ryż ugotować do miękkości w osolonej wodzie, ok. 10 - 15 minut lub zgodnie z instrukcją na opakowaniu.</li>
      <li>Na patelni na oliwie zeszklić pokrojoną cebulę oraz pokrojone pieczarki, dodać starty czosnek, po chwili włożyć zmielone mięso i dokładnie obsmażyć. Jeśli mielimy sami mięso najlepiej zmielić je od razu z surową cebulą, natką i czosnkiem, całość wyłożyć na patelnię i dokładnie obsmażyć.</li>
      <li>Mięso doprawić solą (ok. 2 łyżeczki), pieprzem, dodać przyprawy: tymianek, czerwoną paprykę i kurkumę oraz połowę suszonego oregano. Dodać koncentrat pomidorowy oraz natkę, smażyć przez ok. 2 minuty.</li>
      <li>Dodać odcedzony ryż, wymieszać i podgrzewać przez ok. minutę. Odstawić z ognia. Po lekkim przestudzeniu dodać jajko i wymieszać.</li>
      <li>
        Piekarnik nagrzać do
        <strong>200 stopni C</strong>. Papryki przekroić na połówki (postawić pionowo na desce i przekroić pionowo). Usunąć nasiona. Wnętrze doprawić solą, pieprzem, skropić oliwą i ułożyć w naczyniu żaroodpornym.
      </li>
      <li>
        Wypełnić farszem, na wierzchu położyć plasterek pomidora, doprawić solą i resztą suszonego oregano. Wstawić do piekarnika, do naczynia wlać ok. 1/2 szklanki wody i piec przez
        <strong>35 minut</strong>.
      </li>
      <li>
        Na każdej papryce położyć plasterek sera lub starty ser i zapiekać jeszcze przez
        <strong>ok. 5 - 10 minut</strong>, aż ser będzie roztopiony lub również zrumieniony.
      </li>
    </ol>
  </div>
</template>

<script>
// eslint-disable-next-line
import Faszerowanapapryka from "@/recipes/Faszerowana-papryka.vue";

export default {
  // eslint-disable-next-line
  name: "Faszerowana-papryka",
  components: {
    Faszerowanapapryka
  }
  // eslint-disable-next-line
};
</script>

<style scoped>
.container {
  margin-top: 30px;
}

ol {
  list-style: none;
  list-style-type: square;
}
</style>
