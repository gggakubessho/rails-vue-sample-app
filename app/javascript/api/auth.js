import client from './client'

export default {
  login: (authInfo) => new Promise((resolve, reject) => {
    client.post('/users/sign_in', authInfo)
      .then((res) => resolve({ token: res.headers.authorization, userId: res.data.id }))
      .catch((err) => {
        reject(new Error(err.response.data || err.message))
      })
  }),

  logout: (token) => new Promise((resolve, reject) => {
    client.delete('/users/sign_out', { headers: { Authorization: token } })
      .then(() => resolve())
      .catch((err) => {
        reject(new Error(err.response.data || err.message))
      })
  }),
}
