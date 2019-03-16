<template>
 <div v-on:click="implementAction" class="action">
   <div>
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
      this.$store.commit('changeResources', this.costs);
    },
  },
};
</script>

<style>
.action {
  background-color: white;
  width: 100%;
  height: 50px;
}

.cost-group {
  display: flex;
  justify-content: space-between;

  margin-top: 10px;
  padding: 0 10px;
}
</style>
