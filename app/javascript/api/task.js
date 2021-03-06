import client from './client'

export default {
  add: (token, { name, tasklist_id }) => new Promise((resolve, reject) => {
    client.post('/api/kbnboards', { name, tasklist_id }, { headers: { Authorization: token } })
      .then((res) => resolve(res.data))
      .catch((err) => {
        reject(new Error(err.response.data.message || err.message))
      })
  }),

  update: (token, {
    id, name, description, tasklist_id,
  }) => new Promise((resolve, reject) => {
    client.put(`/api/kbnboards/${id}`, { name, description, tasklist_id }, { headers: { Authorization: token } })
      .then(() => resolve())
      .catch((err) => {
        reject(new Error(err.response.data.message || err.message))
      })
  }),

  remove: (token, { id, tasklist_id }) => new Promise((resolve, reject) => {
    client.delete(`/api/kbnboards/${id}`, { headers: { Authorization: token } })
      .then(() => resolve())
      .catch((err) => {
        reject(new Error(err.response.data.message || err.message))
      })
  }),

  move: (token, { id, from, to }) => new Promise((resolve, reject) => {
    client.post(`/api/kbnboards/${id}/move`, { from, to }, { headers: { Authorization: token } })
      .then(() => resolve())
      .catch((err) => {
        reject(new Error(err.response.data.message || err.message))
      })
  }),
}
