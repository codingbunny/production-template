import * as types from './types';

const state = {
  menu: [],
  currentView: {},
};

const getters = {};

const actions = {
  updateMenu ({ commit }, value) {
    commit(types.READ_MENU, {value});
  },
  updateCurrentView ({commit}, value) {
    commit(types.READ_CURRENT_VIEW, {value});
  },
};

const mutations = {
  [types.READ_MENU] (state, { value }) {
    state.menu = value;
  },
  [types.READ_CURRENT_VIEW] (state, { value }) {
    state.currentView = value;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
