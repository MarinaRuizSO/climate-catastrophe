import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    money: 0,
    popularity: 0,
    sulfate: 0,
    politicalPower: 0,
  },
  mutations: {
    changeResources(state, costs) {
      state.money += costs.money;
      state.popularity += costs.popularity;
      state.sulfate += costs.sulfate;
      state.politicalPower += costs.politicalPower;
    },
  },
  actions: {

  },
});
