
const { Router } = require('express');
const { buscarTodasAsPessoas, buscarPessoaPeloId, criarPessoa, atualizarDados, deletarPessoa } = require('../controllers/pessoa.controller.js');
const idadeMiddleware = require('../middlewares/idade.middleware.js');
const errorMiddleware = require('../middlewares/error.middleware.js');

const router = Router();


router.get('/pessoas', buscarTodasAsPessoas)

router.get('/pessoas/:id', buscarPessoaPeloId)

router.get('/pessoas', async (req, res) => {
    try {
        // 1. Recebe os query params da requisição Express
        const { idade, idadeMin, idadeMax } = req.query;

        // 2. Busca todas as pessoas no JSON Server
        const response = await axios.get(JSON_SERVER_URL);
        let pessoas = response.data;

        // 3. Aplica os filtros na aplicação Express

        // Filtro 1: Idade Exata (?idade=30)
        if (idade !== undefined) {
            const idadeNum = Number(idade);
            pessoas = pessoas.filter(p => Number(p.idade) === idadeNum);
        }

        // Filtro 2: Idade Mínima (?idadeMin=18)
        if (idadeMin !== undefined) {
            const minNum = Number(idadeMin);
            pessoas = pessoas.filter(p => Number(p.idade) >= minNum);
        }

        // Filtro 3: Idade Máxima (?idadeMax=30)
        if (idadeMax !== undefined) {
            const maxNum = Number(idadeMax);
            pessoas = pessoas.filter(p => Number(p.idade) <= maxNum);
        }

        return res.json(pessoas);

    } catch (error) {
        console.error('Erro ao buscar pessoas:', error);
        return res.status(500).json({ erro: 'Erro interno ao buscar pessoas.' });
    }
});

router.post('/pessoas', idadeMiddleware, errorMiddleware, criarPessoa)

router.put('/pessoas/:id', idadeMiddleware, atualizarDados)

router.delete('/pessoas/:id', deletarPessoa)

module.exports = router;

