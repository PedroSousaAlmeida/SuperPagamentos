import api from './api'

export const comentarioService = {
  async getByTicket(ticketId) {
    const response = await api.get(`/comentarios?ticketId=${ticketId}`)
    return response.data
  },

  async create(comentario) {
    const response = await api.post('/comentarios', comentario)
    return response.data
  },

  async delete(id) {
    const response = await api.delete(`/comentarios/${id}`)
    return response.data
  }
}
