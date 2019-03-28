<template>
  <div class="score-presenter">
    <div class=image v-bind:class="resourceType"></div>
    <div>{{$store.state[this.resourceType]}}</div>
  </div>
</template>

<script>
export default {
  name: 'ScorePresenter',
  props: {
    resourceType: String,
  },
};
</script>

<style>
.score-presenter {
  width: 100px;
  font-size: 20px;
  padding: 5px 20px;
  margin: 5px 20px 10px 20px;
  border-bottom: 1px solid black;

  display: flex;

}

.image {
  height: 20px;
  width: 20px;
  background-size: 20px 20px;
  margin-right: 20px;
}
.money {
  background-image: url("../assets/money.png")
}

.popularity {
  background-image: url("../assets/popularity.png")
}

.politicalPower {
  background-image: url("../assets/politicalPower.png")
}

.sulfate {
  background-image: url("../assets/sulfate.png")
}
</style>
