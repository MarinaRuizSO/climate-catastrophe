import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    money: 0,
    popularity: 0,
  },
  mutations: {
    incrementResource(state, resourceType) {
      state[resourceType] += 1;
    },
    decrementResource(state, resourceType) {
      state[resourceType] -= 1;
    },
  },
  actions: {

  },
});
