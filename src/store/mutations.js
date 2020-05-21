import Vue from 'vue'
const mutations = {
  SET_APP_NAME(state, payload) {
    state.appName = payload.appName
  },
  SET_APP_VERSION(state, payload) {
    Vue.set(state, 'appVersion', 'v2.0')
  },
  SET_STATE_VALUE(state, payload) {
    state.stateValue = payload.value
  }
}
export default mutations
