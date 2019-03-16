<template>
  <div v-on:click="$store.commit('nextTurn')" class="end-turn">
    End Turn
  </div>
</template>

<style>
.end-turn {
  grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start: 4;
  grid-row-end: 5;
  background-color: #1ac3e5
}
</style>
