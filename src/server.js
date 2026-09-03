const app = require('./app.js');
const env = require('./config/env.js');

app.listen(env.PORT, () => {
    console.log(`Servidor rodando na porta ${env.PORT}`);
});