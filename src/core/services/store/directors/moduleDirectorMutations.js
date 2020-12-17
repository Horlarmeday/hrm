/*=========================================================================================
  File Name: moduleServiceMutations.js
  Description: Service Module Mutations
==========================================================================================*/

export default {
  ADD_DIRECTOR(state, director) {
    state.directors.unshift(director);
  },

  SET_DIRECTORS(state, directors) {
    state.directors = directors;
  }

  // SET_SERVICES_TOTAL (state, total) {
  //   state.total = total
  // },

  // SET_NUMB_PAGES (state, pages) {
  //   state.pages = pages
  // },

  // SET_SERVICE (state, service) {
  //   state.service = service
  // },

  // UPDATE_SERVICE (state, service) {
  //   const serviceIndex = state.services.findIndex((s) => s.svid === service.svid)
  //   Object.assign(state.services[serviceIndex], service)
  // },

  // REMOVE_SERVICE (state, serviceId) {
  //   const ItemIndex = state.services.findIndex((s) => s.svid === serviceId)
  //   state.services.splice(ItemIndex, 1)
  // }
};
