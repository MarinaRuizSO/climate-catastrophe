<template>
  <div class="action-panel">
    <h1>Action Panel</h1>
    <Action :name="this.availableAction.name" :costs="this.availableAction.cost"></Action>
  </div>
</template>

<script>
import Action from './Action.vue';
// eslint-disable-next-line
import ActionList from '../javascript/actionList.js';

export default {
  name: 'ActionPanel',
  components: {
    Action,
  },
  data() {
    return {
      availableAction: ActionList[0],
    };
  },
};
</script>


<style>
.action-panel {
  grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start: 1;
  grid-row-end: 4;
  background-color: #ff0000
}

</style>
