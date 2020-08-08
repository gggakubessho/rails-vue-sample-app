import client from './client'

export default {
  add: (token, { name, tasklist_id }) => new Promise((resolve, reject) => {
    client.post('/api/kbnboards', { name, tasklist_id }, { headers: { Authorization: token } })
      .then((res) => resolve(res.data))
      .catch((err) => {
        reject(new Error(err.response.data.message || err.message))
      })
  }),
}
