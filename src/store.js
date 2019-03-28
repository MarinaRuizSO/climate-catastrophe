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


const performResourceChange = function (state, costs) {
  state.money += costs.money;
  state.popularity += costs.popularity;
  state.sulfate += costs.sulfate;
  state.politicalPower += costs.politicalPower;
};

const chooseEndGame = (state) => {
  if (state.sulfate <= 100) {
    return 0;
  } if (state.money <= 0) {
    return 2;
  } if (state.popularity <= 0) {
    return 2;
  } if (state.sulfate >= 1000000) {
    return 1;
  }
  return 3;
};

export default new Vuex.Store({
  state: {
    money: 500,
    popularity: 10,
    sulfate: 500,
    politicalPower: 20,
    turnNumber: 0,
    actionList: ActionList,
    availableActions: [
      0,
      1,
    ],
    selectedAction: 1,
    display: 'Info',
    currentEvent: StartInfo[0],
  },
  mutations: {
    doAction(state, action) {
      performResourceChange(state, action.cost);
      state.availableActions = state.availableActions.filter(item => item !== action.id);
    },
    nextTurn(state) {
      // This is the end game scenario!
      if (state.turnNumber >= 4 || state.money <= 0 || state.popularity <= 0) {
        const endingIndex = chooseEndGame(state);
        state.currentEvent = Endings[endingIndex];
        state.availableActions = [];
        return;
      }
      state.turnNumber += 1;
      state.availableActions = [];
      state.money += 1000;
      state.politicalPower += 20;
      state.display = 'Info';
      state.currentEvent = RandomEvents[0];
      performResourceChange(state, state.currentEvent.costs);
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
