import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
// eslint-disable-next-line
import ActionList from './javascript/actionList.js';
// eslint-disable-next-line
import RandomEvents from './javascript/randomEvents.js';
// eslint-disable-next-line
import StartInfo from './javascript/startInfo.js';
// eslint-disable-next-line
import Endings from './javascript/endings.js';

export default new Vuex.Store({
  state: {
    money: 500,
    popularity: 10,
    sulfate: 500,
    politicalPower: 20,
    turnNumber: 0,
    actionList: ActionList,
    availableActions: [
      1,
      2,
    ],
    selectedAction: 1,
    display: 'Info',
    displayInfo: StartInfo[0],
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
      state.money += 1000;
      state.politicalPower += 20;
      state.display = 'Info';
    },
    changeSelectedAction(state, i) {
      state.selectedAction = i;
    },
    changeDisplay(state, name) {
      state.display = name;
    },
  },
  actions: {

  },
});
