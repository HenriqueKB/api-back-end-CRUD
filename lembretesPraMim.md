# ORGANIZAÇÃO

src/
├── controllers/
│   └── pessoa.controller.js
│
├── routes/
│   └── pessoa.routes.js
│
├── services/
│   └── pessoa.service.js
│
├── middlewares/
│   ├── log.middleware.js
│   ├── idade.middleware.js
│   └── error.middleware.js
│
├── config/
│   └── env.js
│
├── app.js
└── server.js

db.json
package.json
README.md

# FLUXO ESPERADO
O fluxo esperado é:

Route
  ↓
Middleware
  ↓
Controller
  ↓
Service
  ↓
JSON Server

# FUNCIONALIDADES A FAZER (tudo feito)
## CRUD PADRÃO (feito)
a
## Filtro por Idade (feito)
A API deverá permitir filtrar pessoas utilizando Query Params.

Filtro por idade exata
GET /pessoas?idade=30
Deverá retornar somente pessoas com 30 anos.

Filtro por idade mínima
GET /pessoas?idadeMin=18
Deverá retornar pessoas com idade igual ou superior a 18 anos.

Filtro por idade máxima
GET /pessoas?idadeMax=30
Deverá retornar pessoas com idade igual ou inferior a 30 anos.

Filtro por faixa etária
GET /pessoas?idadeMin=18&idadeMax=30
Deverá retornar somente pessoas entre 18 e 30 anos.

O filtro deverá ser realizado pela aplicação Express.

Fluxo esperado:

GET /pessoas?idadeMin=18&idadeMax=30
                |
                v
            Express
                |
                v
       Busca pessoas no
         JSON Server
                |
                v
       Aplica os filtros
                |
                v
            Response


## Middleware Obrigatório de Log (feito)

A aplicação deverá possuir um middleware personalizado responsável por registrar todas as requisições recebidas pela API.

Criar, por exemplo:

src/
└── middlewares/
    └── log.middleware.js
O middleware deverá registrar informações como:

[2026-08-24 21:30:10] GET /pessoas
[2026-08-24 21:30:15] POST /pessoas
[2026-08-24 21:30:20] GET /pessoas/2
[2026-08-24 21:30:25] DELETE /pessoas/2
O middleware deverá ser registrado de forma global para que todas as requisições passem por ele.

Exemplo:

Requisição
    |
    v
Log Middleware
    |
    v
Rotas
    |
    v
Controller
O middleware deverá utilizar next() para permitir a continuidade da requisição.

## Validação dos Dados (feito)
O cadastro deverá ser recusado quando:

nome não for informado; feito
nome estiver vazio; feito
idade não for informada; feito
idade não for um número; feito
idade for menor que 0; feito 
idade for maior que 120; feito
email não for informado; feito
email possuir formato inválido. feito

Exemplo inválido:

{
  "nome": "Pedro Santos",
  "idade": 150,
  "email": "pedro@email.com"
}
A API deverá retornar:

400 Bad Request
# ENTREGA ESPERADA

O projeto deverá ser entregue contendo:

Código-fonte da aplicação;
package.json;
db.json;
README.md;
Exemplos das requisições;
Evidências dos testes realizados.
O README.md deverá explicar:

Como instalar o projeto;
Como executar o JSON Server;
Como executar o Express;
Quais são as rotas disponíveis;
Quais são as regras de validação;
Como utilizar os filtros;
Como os middlewares foram implementados.