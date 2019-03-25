<template>
  <div class="display-box">
    <h1 class="header">{{this.action.name}}</h1>
    <div></div>
    <p class="information">{{this.action.information}}</p>
    <a class="implement" v-on:click="this.implementAction">Implement this action</a>
  </div>
</template>

<script>
export default {
  name: 'DisplayBox',
  methods: {
    implementAction() {
      if (this.canImplementAction) {
        this.$store.commit('changeResources', this.action.cost);
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
      if (this.action.cost.popularity + this.$store.state.popularity < 0) {
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
.display-box {
  grid-column-start: 2;
  grid-column-end: 5;
  grid-row-start: 1;
  grid-row-end: 4;

  display: flex;
  flex-direction: column;

  border-bottom: 1px solid black;
  border-left: 1px solid black;
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
