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

const filtroDeIdade = async (req, res) => {
    const idade = req.params.idade
    

    try {
        const pessoas = await pessoaService.find();
        const { idade, idadeMax, idadeMin } = req.query;

        //res.send(pessoas)


        

        //Filtro 1: Idade Exata (?idade=30)
        if (idade !== undefined) {
            const idadeNum = Number(idade);
            pessoas = pessoas.filter(p => Number(p.idade) === idadeNum);
        }

        //Filtro 2: Idade Mínima (?idadeMin=18)
        if (idadeMin !== undefined) {
            const minNum = Number(idadeMin);
            pessoas = pessoas.filter(p => Number(p.idade) >= minNum);
        }

        //Filtro 3: Idade Máxima (?idadeMax=30)
        if (idadeMax !== undefined) {
            const maxNum = Number(idadeMax);
            pessoas = pessoas.filter(p => Number(p.idade) <= maxNum);
        }

        return res.json(pessoas);

    } catch (error) {
        console.error('Erro ao buscar pessoas:', error);
        return res.status(500).json({ erro: 'Erro interno ao buscar pessoas.' });
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
    deletarPessoa,
    filtroDeIdade

};