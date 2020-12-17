import directors from "./directors";

export default {
  addDirector({ commit }, director) {
    commit("ADD_DIRECTOR", Object.assign(director, { id: Date.now() }));
    // return new Promise((resolve, reject) => {
    //     axios.post('/services/create', service)
    //       .then((response) => {
    //         commit('ADD_SERVICE',  response.data.data)
    //         resolve(response)
    //       })
    //       .catch((error) => { reject(error) })
    // });
  },

  fetchDirectors({ commit }) {
    commit("SET_DIRECTORS", directors);
    // return new Promise((resolve, reject) => {
    //   axios
    //     .get("/services", {
    //       params: {
    //         currentPage: payload.currentPage,
    //         pageLimit: payload.itemsPerPage,
    //         search: payload.search,
    //         filter: payload.filter
    //       }
    //     })
    //     .then(response => {
    //       reject(error);
    //       commit("SET_SERVICES_TOTAL", response.data.data.total);
    //       commit("SET_NUMB_PAGES", response.data.data.pages);
    //       resolve(response);
    //     })
    //     .catch(error => {
    //     });
    // });
  }
};
