import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    orders: []
  },
  mutations: {
    addOrder(state, data) {
      state.orders.push(data);
    },
    deleteOrder(state, urlId) {
      state.orders = state.orders.filter(o => o.imgUrl !== urlId);
    }
  },
  actions: {
    addOrder({ commit }, data) {
      commit("addOrder", data);
    },
    deleteOrder({ commit }, urlId) {
      commit("deleteOrder", urlId);
    }
  },
  getters: {
    orders: s => s.orders
  },
  modules: {}
});
