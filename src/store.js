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

const canEventHappen = (state, index) => {
  const requirement = state.randomEvents[index].requirement;
  if (state.sulfate > requirement.sulfate
      && state.popularity > requirement.popularity
      && state.money > requirement.money) {
    return true;
  }
  return false;
};

const chooseEvent = (state) => {
  const length = state.randomEvents.length;
  while (true) {
    const random = Math.floor((Math.random() * length));
    if (canEventHappen(state, random)) {
      return random;
    }
  }
};

const randomActions = (actionList) => {
  const length = actionList.length;
  const actions = [];
  while (actions.length < 4) {
    const random = Math.floor((Math.random() * length));
    if (!actions.includes(random)) {
      actions.push(random);
    }
  }
  return actions;
};

export default new Vuex.Store({
  state: {
    money: 1000,
    popularity: 50,
    sulfate: 500,
    politicalPower: 20,
    turnNumber: 0,
    actionList: ActionList,
    randomEvents: RandomEvents,
    availableActions: randomActions(ActionList),
    selectedAction: 1,
    display: 'Info',
    currentEvent: StartInfo[0],
    gameOver: false,
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
        state.display = 'Info';
        state.gameOver = 'True';
        return;
      }
      state.turnNumber += 1;
      state.availableActions = randomActions(state.actionList);
      state.money += 1000;
      state.politicalPower = 20;
      state.display = 'Info';
      state.currentEvent = this.state.randomEvents[chooseEvent(state)];
      performResourceChange(state, state.currentEvent.costs);
    },
    changeSelectedAction(state, i) {
      state.selectedAction = i;
    },
    changeDisplay(state, name) {
      state.display = name;
    },
    restartGame(state) {
      state.money = 1000;
      state.popularity = 50;
      state.sulfate = 500;
      state.politicalPower = 20;
      state.turnNumber = 0;
      state.actionList = ActionList;
      state.randomEvents = RandomEvents;
      state.availableActions = randomActions(ActionList);
      state.selectedAction = 1;
      state.display = 'Info';
      state.currentEvent = StartInfo[0];
      state.gameOver = false;
    },
  },
  actions: {

  },
});
