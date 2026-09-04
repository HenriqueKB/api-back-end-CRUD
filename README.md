# api-back-end-CRUD
Um trabalho da faculdade, especificamente de back-end, sobre resumidamente fazer um CRUD bem feito, com conceitos de middleware e fluxos de API aplicados na prática, tudo neste projeto.

# Tutorial de como instalar essa joça:
## Como instalar o projeto;


### Você vai precisar das seguintes coisas:

* **[Git](https://git-scm.com/)**
* **[Node.js](https://nodejs.org/)** (versão LTS recomendada, inclui o `npm`)
* Uma pasta vazia pra salvar o projeto obviamente é necessária
* OPCIONAL: pix no número 44 99142-8080 pra fazer um churrasco ou comer no Cantinho da Costela.


### Instalando o projeto:

1. Comece rodando esse comando na pasta vazia de sua escolha:
   git clone https://github.com/SEU-USUARIO/NOME-DO-SEU-REPO.git
2. Depois abra a pasta do projeto:
   cd NOME-DO-SEU-REPO
3.Rode este comando para instalar os pacotes necessários para o projeto:
  npm install


# Rodando o projeto:

Como executar o JSON Server: 
npm run server

Como executar o Express:
npm start


# Quais são as rotas disponíveis?

- POST | Criação de Usuário: /pessoas
- GET | Busca de Usuário: /pessoas
- GETBYID | Busca de Usuário por ID: /pessoas/:id
- PUT | Modificação de Dados do Usuário: /pessoas/:id
- DELETE | Remoção de Usuário: /pessoas/:id


# Quais são as regras de validação?

O sistema impede a criação de usuários com nome, email e idades vazios, além dos emails serem obrigados a terem pelo menos @ para serem criados, além de obviamente impedir a inserção no campo idade com QUALQUER letra ou caractere que não for número.


# Como utilizar os filtros?

## Filtros de Idade:

Para usar os filtros de idade, segue os exemplos:
### Idade Específica: http://localhost:3000/pessoas?idade=30 
### Idade Máxima: http://localhost:3000/pessoas?idadeMax=100
### Idade Mínima: http://localhost:3000/pessoas?idadeMin=18


## Filtro de Inicial:

Para usar o filtro de inicial de nome, segue o exemplo abaixo:
### Inicial: http://localhost:3000/pessoas?nome=m

## Curiosidade: Você pode usar os dois filtros juntos, conforme alguns exemplos abaixo:
### Pessoas a partir de 18 anos com M na inicial: http://localhost:3000/pessoas?nome=m&idadeMin=18
### Pessoas com até no máxima 30 anos com H na inicial: http://localhost:3000/pessoas?nome=h&idadeMax=30
### Pessoas com no mínimo 18 anos e no máximo 30 anos com M na inicial: http://localhost:3000/pessoas?nome=m&idadeMin=18&idadeMax=30

# Como os middlewares foram implementados?
### logMiddleware.js: Mostra no terminal a requisição feita e a rota dela.
### idadeMiddleware.js: Intercepta a requisição e valida se a idade informada é um número válido e está dentro do limite de 0 a 120 anos.
### errorMiddleware.js: Garante o tratamento padronizado e a verificação de integridade dos campos obrigatórios (nome e email), impedindo que a requisição prossiga caso alguma regra seja violada.
