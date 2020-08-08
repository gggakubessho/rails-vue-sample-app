import * as types from './mutation-types'
import { Auth, List, Task } from '../api'

export default {
  login: ({ commit }, authInfo) => Auth.login(authInfo)
    .then(({ token, userId }) => {
      localStorage.setItem('token', token)
      commit(types.AUTH_LOGIN, { token, userId })
    })
    .catch((err) => { throw err }),

  fetchLists: ({ commit, state }) => List.fetch(state.auth.token)
    .then(({ lists }) => {
      commit(types.FETCH_ALL_TASKLIST, lists)
    })
    .catch((err) => { throw err }),

  addTask: ({ commit, state }, { tasklist_id, name }) => Task.add(state.auth.token, { tasklist_id, name })
    .then((task) => {
      commit(types.ADD_TASK, task)
    })
    .catch((err) => { throw err }),

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
