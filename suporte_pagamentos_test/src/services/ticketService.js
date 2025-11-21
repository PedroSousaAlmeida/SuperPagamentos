import api from './api'

export const ticketService = {
  async getAll() {
    const response = await api.get('/tickets')
    return response.data
  },

  async getById(id) {
    const response = await api.get(`/tickets/${id}`)
    return response.data
  },

  async create(ticket) {
    const response = await api.post('/tickets', ticket)
    return response.data
  },

  async update(id, ticket) {
    const response = await api.put(`/tickets/${id}`, ticket)
    return response.data
  },

  async delete(id) {
    const response = await api.delete(`/tickets/${id}`)
    return response.data
  },

  async getByStatus(status) {
    const response = await api.get(`/tickets?status=${status}`)
    return response.data
  }
}
