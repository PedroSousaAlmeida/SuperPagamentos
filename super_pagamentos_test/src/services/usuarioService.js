import api from "./api";

export const usuarioService = {
  async getAll() {
    const response = await api.get("/usuarios");
    return response.data;
  },

  async getById(id) {
    const response = await api.get(`/usuarios/${id}`);
    return response.data;
  },

  async create(usuario) {
    const response = await api.post("/usuarios", usuario);
    return response.data;
  },

  async update(id, usuario) {
    const response = await api.put(`/usuarios/${id}`, usuario);
    return response.data;
  },
};
