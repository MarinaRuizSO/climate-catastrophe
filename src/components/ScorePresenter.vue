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
  font-size: 20px;
  padding: 5px 20px;
  margin: 5px 20px 10px 20px;
  border-bottom: 1px solid black;

}
</style>
