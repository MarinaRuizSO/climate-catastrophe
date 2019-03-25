<template>
  <a v-on:click="$store.commit('nextTurn')" class="end-turn">
    End Turn
  </a>
</template>

<style>
.end-turn {
  grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start: 4;
  grid-row-end: 5;
  font-size: 30px;

  margin: 0 20px 5px 20px;
  border-top: 1px solid black;
}

.end-turn:hover {
  text-decoration: underline;
  cursor: pointer;
}

.end-turn:active {
  border-bottom: 1px solid black;
}
</style>
