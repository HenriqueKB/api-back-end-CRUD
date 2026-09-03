const errorMiddleware = (req, res, next) => {
   const { nome, email,idade } = req.body;
   //Verificar se a idade é do tipo válido e afins
   if (idade === undefined || typeof idade != 'number' || idade < 0) {
        return res.status(400).json({ erro: 'Idade inválida ou não informada, tente novamente.'});

   }
   //Verificação do nome (tipo válido e tals)
   if (!nome || typeof nome !== 'string' || nome.trim() === '') {
      return res.status(400).json({ erro: 'O nome é obrigatório e não pode estar vazio.' });
   }
   

   //Verificar se o email também é válido
   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
        return res.status(400).json({ erro: 'O e-mail é obrigatório e deve ter um formato válido (ex: @example.com).' });
    } 
   next();
};

module.exports = errorMiddleware;