<template>
  <div class="info-panel">
    <ScorePresenter resourceType="money"></ScorePresenter>
    <ScorePresenter resourceType="popularity"></ScorePresenter>
    <ScorePresenter resourceType="sulfate"></ScorePresenter>
    <ScorePresenter resourceType="politicalPower"></ScorePresenter>
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
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  grid-column-start: 2;
  grid-column-end: 5;
  grid-row-start: 4;
  grid-row-end: 5;
  background-color: #1ac315
}
</style>
