import Vue from "vue";
import Vuex from "vuex";
import * as firebase from "firebase";
import EventBus from "../eventBus";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    error: null
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    setError(state, payload) {
      return (state.error = payload);
    },
    clearError(state) {
      return (state.error = null);
    }
  },
  actions: {
    registerUser({ commit }, payload) {
      EventBus.$emit("CALL_IN_PROGRESS", true);
      commit("clearError");
      firebase
        .auth()
        .createUserWithEmailAndPassword(payload.email, payload.password)
        .then(user => {
          commit("setUser", user);
          EventBus.$emit("CALL_IN_PROGRESS", false);
        })
        .catch(err => {
          commit("setError", err);
          EventBus.$emit("CALL_IN_PROGRESS", false);
        });
    },
    loginUser({ commit }, payload) {
      EventBus.$emit("CALL_IN_PROGRESS", true);
      commit("clearError");
      firebase
        .auth()
        .signInWithEmailAndPassword(payload.email, payload.password)
        .then(user => {
          commit("setUser", user);
          EventBus.$emit("CALL_IN_PROGRESS", false);
        })
        .catch(err => {
          commit("setError", err);
          EventBus.$emit("CALL_IN_PROGRESS", false);
        });
    }
  },
  getters: {
    getUser(state) {
      return state.user;
    },
    getError(state) {
      return state.error;
    }
  },
  modules: {}
});
