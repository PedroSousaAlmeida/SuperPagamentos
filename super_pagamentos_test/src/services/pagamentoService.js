import api from './api'

export const pagamentoService = {
  async getAll() {
    const response = await api.get('/pagamentos')
    return response.data
  },

  async getById(id) {
    const response = await api.get(`/pagamentos/${id}`)
    return response.data
  },

  async create(pagamento) {
    const response = await api.post('/pagamentos', pagamento)
    return response.data
  },

  async update(id, pagamento) {
    const response = await api.put(`/pagamentos/${id}`, pagamento)
    return response.data
  },

  async getByUsuario(usuarioId) {
    const response = await api.get(`/pagamentos?usuarioId=${usuarioId}`)
    return response.data
  },

  async getByStatus(status) {
    const response = await api.get(`/pagamentos?status=${status}`)
    return response.data
  }
}
