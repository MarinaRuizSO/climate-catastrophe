<template>
  <div class="score-presenter">
    {{this.symbol}} {{$store.state[this.resourceType]}}
  </div>
</template>

<script>
export default {
  name: 'ScorePresenter',
  props: {
    resourceType: String,
  },
  data() {
    const symbols = {
      money: '$',
      popularity: '<3',
      sulfate: 'SO2',
      politicalPower: 'PP',
    };
    return {
      symbol: symbols[this.resourceType],
    };
  },
};
</script>

<style>
.score-presenter {
  padding: 20px;
  margin: 20px;
  background-color: white;

}
</style>
