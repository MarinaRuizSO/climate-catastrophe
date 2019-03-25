<template>
 <div v-on:click="implementAction" class="action">
   <div class="action-name">
     {{name}}
   </div>
   <div class="cost-group">
     <span>$ {{costs.money}}</span>
     <span>&lt;3 {{costs.popularity}}</span>
     <span>SO2 {{costs.sulfate}}</span>
     <span>PP {{costs.politicalPower}}</span>
   </div>
 </div>
</template>


<script>
export default {
  name: 'Action',
  props: {
    name: String,
    costs: Object,
  },
  methods: {
    implementAction() {
      if (this.canImplementAction) {
        this.$store.commit('changeResources', this.costs);
      }
    },
  },
  computed: {
    canImplementAction() {
      if (this.costs.money + this.$store.state.money < 0) {
        return false;
      }
      if (this.costs.popularity + this.$store.state.popularity < 0) {
        return false;
      }
      if (this.costs.sulfate + this.$store.state.sulfate < 0) {
        return false;
      }
      if (this.costs.politicalPower + this.$store.state.politicalPower < 0) {
        return false;
      }
      return true;
    },
  },
};
</script>

<style>
.action {
  margin: 0 10px;
  cursor: pointer;
  margin-bottom: 2px;
  border-top: 1px solid black;
}

.action:hover {
  margin-bottom: 0px;
  border-bottom: 2px solid black;
}

.action:active {
  background-color: # f0f0f0;
}

.action-name {
  font-size: 20px;
}

.cost-group {
  display: flex;
  justify-content: space-between;

  margin-top: 10px;
  padding: 0 10px;
}
</style>
