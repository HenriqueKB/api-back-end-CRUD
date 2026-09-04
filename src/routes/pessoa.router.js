
const { Router } = require('express');
const { buscarTodasAsPessoas, buscarPessoaPeloId, criarPessoa, atualizarDados, deletarPessoa, filtroDeIdade } = require('../controllers/pessoa.controller.js');
const idadeMiddleware = require('../middlewares/idade.middleware.js');
const errorMiddleware = require('../middlewares/error.middleware.js');

const router = Router();


router.get('/pessoas', buscarTodasAsPessoas, filtroDeIdade)


router.get('/pessoas/:id', buscarPessoaPeloId)

router.post('/pessoas', idadeMiddleware, errorMiddleware, criarPessoa)

router.put('/pessoas/:id', idadeMiddleware, atualizarDados)

router.delete('/pessoas/:id', deletarPessoa)

module.exports = router;

