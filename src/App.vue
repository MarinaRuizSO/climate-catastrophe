<template>
  <div id="app">
    <link rel="stylesheet" type="text/css" href="./styles/grid.css">
    <Grid></Grid>
  </div>
</template>

<script>
import Grid from './components/Grid.vue';

export default {
  name: 'app',
  components: {
    Grid,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
