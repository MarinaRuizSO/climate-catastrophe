import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    money: 0,
  },
  mutations: {
    incrementMoney(state) {
      state.money += 1;
    },
  },
  actions: {

  },
});
