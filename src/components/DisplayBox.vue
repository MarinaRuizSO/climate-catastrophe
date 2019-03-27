<template>
  <div class="display-box">
    <InfoDisplay v-if="this.display=='Info'"></InfoDisplay>
    <ActionDisplay v-else-if="this.display=='Action'"></ActionDisplay>

  </div>
</template>

<script>
import ActionDisplay from './ActionDisplay.vue';
import InfoDisplay from './InfoDisplay.vue';

export default {
  name: 'DisplayBox',
  components: {
    ActionDisplay,
    InfoDisplay,
  },
  computed: {
    display() {
      return this.$store.state.display;
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

  border-bottom: 1px solid black;
  border-left: 1px solid black;
}

</style>
