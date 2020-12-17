/*=========================================================================================
  File Name: moduleService.js
  Description: Service Module
==========================================================================================*/

import state from "./moduleDirectorState.js";
import mutations from "./moduleDirectorMutations.js";
import actions from "./moduleDirectorActions.js";
// import getters from "./moduleServiceGetters.js";

export default {
  namespaced: true,
  state,
  mutations,
  actions
  //   getters
};
