<template>
  <div class="action-display">
    <Close></Close>
    <h1 class="header">{{this.action.name}}</h1>
    <div></div>
    <p class="information">{{this.action.information}}</p>
    <a class="implement" v-on:click="this.implementAction">Implement this action</a>
  </div>
</template>

<script>
import Close from './Close.vue';

export default {
  name: 'ActionDisplay',
  components: {
    Close,
  },
  methods: {
    implementAction() {
      if (this.canImplementAction) {
        this.$store.commit('doAction', this.action);
      }
    },
  },
  computed: {
    action() {
      return this.$store.state.actionList[this.$store.state.selectedAction];
    },
    canImplementAction() {
      if (this.action.cost.money + this.$store.state.money < 0) {
        return false;
      }
      if (this.action.cost.politicalPower + this.$store.state.politicalPower < 0) {
        return false;
      }
      return true;
    },
  },
};
</script>

<style>

.action-display {
  display: flex;
  flex-direction: column;
}
.header {
  font-size: 40px;
  border-bottom: 1px solid black;
  width: auto;
  margin: 23px auto;
}

.information {
  margin: 0px 50px;
}

.implement {
  grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start: 4;
  grid-row-end: 5;
  font-size: 30px;

  margin: 20px auto;
  padding: 10px 20px;
  border: 1px solid black;

  background-color: #ff9966;
}

.implement:hover {
  background-color: #ff8844;
  cursor: pointer;
}

.implement:active {
  background-color: #ee6622;
}
</style>
