import * as types from './mutation-types'
import { Auth, List, Task } from '../api'

export default {
  login: ({ commit }, authInfo) => Auth.login(authInfo)
    .then(({ token, userId }) => {
      localStorage.setItem('token', token)
      commit(types.AUTH_LOGIN, { token, userId })
    })
    .catch((err) => { throw err }),

  fetchLists: ({ commit }) => {
    throw new Error('fetchLists action sould be implemented')
  },

  addTasks: ({ commit }) => {
    throw new Error('addTask action sould be implemented')
  },

  updateTask: ({ commit }) => {
    throw new Error('updateTask action sould be implemented')
  },

  removeTask: ({ commit }) => {
    throw new Error('removeTask action sould be implemented')
  },

  logout: ({ commit, state }) => Auth.logout(state.auth.token)
    .then(() => {
      localStorage.removeItem('token')
      commit(types.AUTH_LOGOUT, { token: null, userId: null })
    })
    .catch((err) => { throw err }),
}
