import directors from "./directors/directors";
export const SET_DIRECTORS = "setDirectors";
export const ADD_DIRECTOR = "addDirector";

export const SET_ALL_DIRECTORS = "setAllDirectors";
export const ADD_NEW_DIRECTOR = "addNewDirector";

export default {
  state: {
    directors: [],
    director: null
  },

  mutations: {
    [ADD_DIRECTOR](state, director) {
      state.directors.unshift(director);
    },

    [SET_DIRECTORS](state, directors) {
      state.directors = directors;
    }
  },

  getters: {
    getdirectors(state) {
      return state.directors;
    }
  },

  actions: {
    [ADD_NEW_DIRECTOR]({ commit }, director) {
      commit([ADD_DIRECTOR], Object.assign(director, { id: Date.now() }));
      // return new Promise((resolve, reject) => {
      //     axios.post('/services/create', service)
      //       .then((response) => {
      //         commit('ADD_SERVICE',  response.data.data)
      //         resolve(response)
      //       })
      //       .catch((error) => { reject(error) })
      // });
    },

    [SET_ALL_DIRECTORS]({ commit }) {
      commit([SET_DIRECTORS], directors);
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
  }
};
