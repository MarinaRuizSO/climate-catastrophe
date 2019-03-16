<template>
  <div class="grid">
    <action-panel></action-panel>
    <end-turn></end-turn>
    <span class="display-box">Display box</span>
    <info-panel></info-panel>
  </div>
</template>

<script>
import InfoPanel from './InfoPanel.vue';
import ActionPanel from './ActionPanel.vue';
import EndTurn from './EndTurn.vue';

export default {
  name: 'Grid',
  components: {
    InfoPanel,
    ActionPanel,
    EndTurn,
  },
};
</script>

<style>
.grid {
  height: 500px;
  width: 80vw;
  display: grid;
  grid-template-rows: 30% 30% 30% 10%;
  grid-template-columns: 25% 25% 25% 25%;
}

.display-box {
  grid-column-start: 2;
  grid-column-end: 5;
  grid-row-start: 1;
  grid-row-end: 4;
  background-color: #5f23e5
}

</style>
