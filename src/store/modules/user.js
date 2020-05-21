const state = {
  userName: 'Magty'
}

const getters = {
  firstLetter: (state) => {
    return state.userName.substr(0, 1)
  }
}

const mutations = {
  SET_USER_NAME(state, payload) {
    state.userName = payload.name
  }
}

const actions = {
  updateUserName({
    commit,
    state,
    rootState
  }) {

  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
  modules: {

  }
}
