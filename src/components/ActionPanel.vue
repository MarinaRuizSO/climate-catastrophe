<template>
  <div class="action-panel">
    <h1 class="title">Actions</h1>
    <div v-for="action in availableActions" v-bind:key="action.name">
      <Action :name="action.name" :costs="action.cost"></Action>
    </div>
  </div>
</template>

<script>
import Action from './Action.vue';

export default {
  name: 'ActionPanel',
  components: {
    Action,
  },
  computed: {
    availableActions() {
      return this.$store.state.availableActions;
    },
  },
};
</script>


<style>
.action-panel {
  grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start: 1;
  grid-row-end: 4;
  background-color: #ffff80;

  margin: 10px;
}

.title {

}

</style>
