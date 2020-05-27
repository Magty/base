import {
  login,
  authorization
} from '@/api/user'

import {
  setToken
  /* ,
    getToken */
} from '@/lib/util'

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

  },
  login({
    commit
  }, {
    userName,
    password
  }) {
    return new Promise((resolve, reject) => {
      login({
        userName,
        password
      }).then(res => {
        if (res.code === 200 && res.data && res.data.token) {
          setToken(res.data.token)
          resolve()
        } else {
          reject(new Error('错误'))
        }
      }).catch(error => {
        reject(error)
      })
    })
  },
  logout() {
    setToken('')
  },
  authorization({
    commit
  }, token) {
    return new Promise((resolve, reject) => {
      authorization().then(res => {
        if (parseInt(res.code) === 401) {
          reject(new Error('token error'))
        } else {
          setToken(res.data.token)
          resolve()
        }
      }).catch(error => {
        reject(error)
      })
    })
  }
}

export default {
  namespaced: false,
  state,
  getters,
  mutations,
  actions,
  modules: {

  }
}
