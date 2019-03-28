<template>
 <div v-on:click="this.displayAction" class="action">
   <div class="action-name">
     {{name}}
   </div>
   <div class="cost-group">
     <span class='group'>
       <div class="image-small money"></div>
       <div>
         {{costs.money}}
       </div>
     </span>
     <span class='group'>
       <div class="image-small popularity"></div>
       <div>
         {{costs.popularity}}
       </div>
     </span>
     <span class='group'>
       <div class="image-small sulfate"></div>
       <div>
         {{costs.sulfate}}
       </div>
     </span>
     <span class='group'>
       <div class="image-small politicalPower"></div>
       <div>
         {{costs.politicalPower}}
       </div>
     </span>
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
      this.$store.commit('changeDisplay', 'Action');
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
  flex-wrap: wrap;

  margin-top: 10px;
}

.image-small {
  height: 15px;
  width: 15px;
  background-size: 15px 15px;
  margin-right: 3px;
}

.group {
  display: flex;
  align-items: center;
}
</style>
