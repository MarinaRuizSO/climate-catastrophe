<template>
  <div class="grid">
    <action-panel></action-panel>
    <span class="end-turn">End turn</span>
    <span class="display-box">Display box</span>
    <info-panel></info-panel>
  </div>
</template>

<script>
import InfoPanel from './InfoPanel.vue';
import ActionPanel from './ActionPanel.vue';

export default {
  name: 'Grid',
  components: {
    InfoPanel,
    ActionPanel,
  },
};
</script>

<style>
.grid {
  height: 600px;
  width: 80vw;
  display: grid;
  grid-template-rows: 25% 25% 25% 25%;
  grid-template-columns: 25% 25% 25% 25%;
}


.end-turn {
  grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start: 4;
  grid-row-end: 5;
  background-color: #1ac3e5
}

.display-box {
  grid-column-start: 2;
  grid-column-end: 5;
  grid-row-start: 1;
  grid-row-end: 4;
  background-color: #5f23e5
}

</style>
