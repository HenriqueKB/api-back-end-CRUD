const idadeMiddleware = (req, res, next) => {
   
    const { idade } = req.body || {};
    const idadeNumero = Number(idade);
    if (isNaN(idadeNumero) || idadeNumero < 0 || idadeNumero > 120) {
        return res.status(400).json({ erro: 'A idade deve estar entre 0 e 120 anos.'});

   }
   next();

}

module.exports = idadeMiddleware;