# bhut---prova-backend
Esta aplicação é uma API REST desenvolvida em Node.js com TypeScript que consome uma API externa e implementa serviços próprios de cadastro e consulta de carros, além de integração com mensageria e logs.

A API externa utilizada é:

http://api-test.bhut.com.br:3000/api

Endpoints consumidos:
GET /v1/carro
POSt /v1/carro

Tecnologias utilizadas:

Node.js
TypeScript
Express
Axios
MongoDB -Não consegue usar
Sistema de mensageria RabbitMQ - consumer comentado

Execução do projeto:

por meio do bash:
git clone <url_do_repositorio>
cd <Nome_do_projeto>

Instalar as dependências
 por meio do bash

 npm install

 Rodar a aplicação

 por meio do bash

 npm run dev

 A aplicação estará 

 http://localhost:3000

 Endpoints da API

 1.GEt /api/car

 retorma a lista de carrps consumindo a API externa.
 Fluxo:
 A API chama GET /v1/carro da API externa
 Retorna os dados diretamente para o cliente

 Exemplo de requisição:

 GET /api/car

 Resposta:

 [
  {
    "id": 1,
    "modelo": "Fiat Uno",
    "ano": 2020
  }
]

2. POST /api/car

Cria um carro na API externa e (quando ativo) envia mensagem para fila.

 Fluxo:
1-Recebe dados do carro
2-Envia para API externa (POST /v1/carro)
3-Retorna o carro criado
4-(Opcional - atualmente desativado)
Publica mensagem na fila com:
car_id
data_hora_criacao

Exemplo de requisição:
http

POST /api/car
Content-Type: application/json

JSON

{
  "paginacao": {
    "pagina": 1,
    "tamanhoPagina": 500,
    "total": 1
  },
  "itens": [
    {
      "id": "c7e4dca4-f649-4935-bb62-3013f124be0a",
      "nome": "Etios",
      "marca": "Toyota",
      "preco": 49999.99,
      "anoFabricacao": 2016,
      "ativo": true,
      "criadoEm": "2026-04-28 19:52:11",
      "atualizadoEm": null
    }
  ]
}

GEt /api/v1/carro

{
  "paginacao": {
    "pagina": 1,
    "tamanhoPagina": 500,
    "total": 1
  },
  "itens": [
    {
      "id": "c7e4dca4-f649-4935-bb62-3013f124be0a",
      "nome": "Etios",
      "marca": "Toyota",
      "preco": 49999.99,
      "anoFabricacao": 2016,
      "ativo": true,
      "criadoEm": "2026-04-28 19:52:11",
      "atualizadoEm": null
    }
  ]
}


GET /api/v1/carro{id}

{
  "id": "c7e4dca4-f649-4935-bb62-3013f124be0a",
  "nome": "Etios",
  "marca": "Toyota",
  "preco": 49999.99,
  "anoFabricacao": 2016,
  "ativo": true,
  "criadoEm": "2026-04-28 19:52:11",
  "atualizadoEm": null
}

PUt v1/carro/{id}

{
  "nome": "Corola",
  "marca": "Toyota",
  "preco": 49999.99,
  "anoFabricacao": 2014
}

DELETE v1/carro/{id}

204 No Content

Todos as ações foram feitas no vscode.

Segue imagens do processo por email.
