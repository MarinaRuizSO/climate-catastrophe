import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
// eslint-disable-next-line
import ActionList from './javascript/actionList.js';
export default new Vuex.Store({
  state: {
    money: 0,
    popularity: 0,
    sulfate: 0,
    politicalPower: 0,
    turnNumber: 0,
    availableActions: [
      ActionList[0],
    ],
  },
  mutations: {
    changeResources(state, costs) {
      state.money += costs.money;
      state.popularity += costs.popularity;
      state.sulfate += costs.sulfate;
      state.politicalPower += costs.politicalPower;
    },
    nextTurn(state) {
      state.turnNumber += 1;
      state.availableActions = [ActionList[1]];
    },
  },
  actions: {

  },
});
