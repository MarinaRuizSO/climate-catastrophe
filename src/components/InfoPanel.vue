<template>
  <div v-on:click="$store.commit('incrementMoney')" class="info-panel">
    <ScorePresenter resourceType="money"></ScorePresenter>
  </div>
</template>

<script>
import ScorePresenter from './ScorePresenter.vue';

export default {
  name: 'InfoPanel',
  components: {
    ScorePresenter,
  },
};
</script>

<style>
.info-panel{
  grid-column-start: 2;
  grid-column-end: 5;
  grid-row-start: 4;
  grid-row-end: 5;
  background-color: #1ac315
}
</style>
