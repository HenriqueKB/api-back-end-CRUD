const pessoaService = require('../services/pessoa.services.js')

const buscarTodasAsPessoas = async (req, res) => {
    try {
        const pessoas = await pessoaService.find();
        res.send(pessoas)
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
};

const buscarPessoaPeloId = async (req, res) => {
    const id  = req.params.id; //Parametros pra rodar: ter o ID da pessoa
    if (!id) {
        res.status(400).send("ID não fornecido!");
        return;
    }
    
    try {
        const pessoa = await pessoaService.findById(id);

        if (!pessoa) {
        res.status(404).send("Pessoa não encontrada!");

        return;
        }
        res.send(pessoa);
    } catch(error) {
        console.log(error)
        res.status(500).send(error.message);

    }
}

const criarPessoa = async (req, res) => {
    const pessoa = req.body;
    
    try {
        const novaPessoa = await pessoaService.create(pessoa);
        res.status(201).send(novaPessoa);

    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
    
}

const atualizarDados = async (req,res) => {
    const id = req.params.id;
    const pessoa = req.body;

    try {
        const pessoaAtualizado = await pessoaService.update(id, pessoa);
        res.send(pessoaAtualizado);
    } catch (error) {
        console.log(error)
        res.status(500).send(error.message)
    }
    
};

const deletarPessoa = async (req,res) => {
    const id = req.params.id;
    

    try {
        await pessoaService.remove(id);
        res.status(204).send("Pessoa deletada com sucesso!");
        return;
    } catch (error) {
        console.log(error)
        res.status(500).send(error.message)
    }
    
};

module.exports = {
    
    criarPessoa,
    buscarTodasAsPessoas,
    buscarPessoaPeloId,
    atualizarDados,
    deletarPessoa

};