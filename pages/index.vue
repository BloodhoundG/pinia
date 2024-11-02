<script setup lang="ts">
const firstStore = useFirstStore();
const secondStore = useSecondStore();

// обращаюсь к state и getters данным хранилища
console.log('firstStoreData',firstStore.firstName);
console.log('secondStoreData',secondStore.fullName);

// изначально age равен 24, а в консоль выведется число 26
// поэтому рекомендуется изменять состояния через actions а не напрямую
firstStore.age += 1;
console.log(firstStore.age);

secondStore.about = 'changed info about me'
console.log(secondStore.about);
</script>

<template>
<div>
  Хранилище с синтаксисом Option API
  <!-- вывожу объект целиком для наглядности -->
  <pre>{{ firstStore }}</pre>
  <div>ниже для изменения состояния хранилища age используется actions (рекомендуемый вариант)</div>
  <button @click="firstStore.incrementAge()">Постареть на 1 год</button>
</div>


<div>
  Хранилище с синтаксисом Composition API
  <!-- вывожу объект целиком для наглядности -->
  <pre>{{ secondStore }}</pre>
  <div>ниже для изменения состояния хранилища age напрямую (НЕ рекомендуемый вариант)</div>
  <button @click="secondStore.age += 1">Постареть на 1 год</button>
</div>

</template>

<style scoped>

</style>
