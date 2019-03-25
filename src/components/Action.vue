<template>
 <div v-on:click="this.displayAction" class="action">
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
    id: Number,
  },
  methods: {
    displayAction() {
      this.$store.commit('changeSelectedAction', this.id);
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
