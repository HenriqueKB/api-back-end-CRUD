const api = require('../config/api');

//buscarTodasAsPessoas
const find = async () => {
    const response = await api.get('/pessoas');
    return response.data;
};

//buscarPessoaPeloId
const findById = async (id) => {
    const response = await api.get(`/pessoas/${id}`);
    return response.data;
};

//criarPessoa
const create = async (pessoa) => {
    const response = await api.post('/pessoas', pessoa);
    return response.data;
};

//atualizarDados
const update = async (id, pessoa) => {
    const response = await api.put(`/pessoas/${id}`, pessoa);
    return response.data;
};

//deletarPessoa
const remove = async (id) => {
    const response = await api.delete(`/pessoas/${id}`);
    return response.data;
};

module.exports = {
    find,
    findById,
    create,
    update,
    remove
};