<template>
  <div class="display-box">
    <InfoDisplay
      v-if="this.display=='Info'"
      :heading="this.displayInfo.heading"
      :information="this.displayInfo.information">
    </InfoDisplay>
    <ActionDisplay v-else-if="this.display=='Action'"></ActionDisplay>
    <div v-else alt="Vue logo" class="china"></div>

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
    displayInfo() {
      return this.$store.state.displayInfo;
    },
  },
};
</script>

<style>
.display-box {
  position: relative;
  grid-column-start: 2;
  grid-column-end: 5;
  grid-row-start: 1;
  grid-row-end: 4;

  border-bottom: 1px solid black;
  border-left: 1px solid black;
}

.china {
  background-image: url('../assets/china.png');
  height: 100%;
}

</style>
