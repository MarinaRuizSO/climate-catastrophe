<template>
  <div class="grid">
    <action-panel></action-panel>
    <end-turn></end-turn>
    <display-box></display-box>
    <info-panel></info-panel>
  </div>
</template>

<script>
import InfoPanel from './InfoPanel.vue';
import ActionPanel from './ActionPanel.vue';
import EndTurn from './EndTurn.vue';
import DisplayBox from './DisplayBox.vue';

export default {
  name: 'Grid',
  components: {
    InfoPanel,
    ActionPanel,
    EndTurn,
    DisplayBox,
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

  border: 2px black solid;
  background-color: #ffff80;
  border-radius: 10px;
  margin: 0 10px;
}

</style>
