import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import moduleDirector from "./directors/moduleDirector.js";

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    director: moduleDirector
  },
  strict: process.env.NODE_ENV !== "production"
});
