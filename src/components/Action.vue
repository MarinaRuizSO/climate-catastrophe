<template>
 <div v-on:click="implementAction" class="action">{{name}}</div>
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
</style>
