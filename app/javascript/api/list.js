import client from './client'

export default {
  fetch: (token) => new Promise((resolve, reject) => {
    client.get('/api/kbnboards', { headers: { Authorization: token } })
      .then((res) => resolve({ lists: res.data }))
      .catch((err) => {
        reject(new Error(err.response.data || err.message))
      })
  }),
}
