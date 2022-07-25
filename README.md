# Desafio Técnico XPInc.

Este projeto trata-se de uma aplicação BackEnd para investimentos em ações com funcionalidades da conta digital.

## 🛠️ Ferramentas

Ferramentas utilizadas para desenvolvimento da aplicação.

* [NodeJS](https://nodejs.org/en/) - Plataforma de aplicação
* [ExpressJS](https://expressjs.com/) - Framework web para NodeJS
* [JavaScript](https://www.javascript.com/) - Linguagem de programação
* [MySQL](https://www.mysql.com/) - Gerenciador de banco de dados relacional
* [Sequelize](https://sequelize.org/) - ORM(Object/Relational Mapper) - Mapeamento de dados relacionais
* [Joi](https://joi.dev/api/?v=17.6.0) - Módulo para validação de dados

## 📋 Funcionalidades

> Buscar ações disponíveis na Corretora de Valores
> 
> Realizar compra e venda de ações pela conta digital
> 
> Efetuar depósito, saque e verificar saldo

## ⚙️ Instruções 

Essas instruções permitirão que você obtenha uma cópia do projeto na sua máquina.

### 🔧 Instalação

1.Clonar o repositório
* git clone https://github.com/amandagayotto/desafio-tecnico-xp

2.Verificar a branch
* Fazer pull da branch 'main'

3.Rodando com Docker
* Usar o comando: docker-compose -f "docker-compose.yml" up -d --build
Esse serviço irá inicializar um container chamado investiments_api e outro container chamado investments_api_db que irá montar o banco de dados
A partir daqui você pode rodar o container via CLI ou abri-lo no VS Code

4.Acesso ao terminal interativo do container
* Usar o comando: docker exec -it investiments_api bash

5.Instalar as dependências
* Usar o comando: npm install

6.Iniciar a aplicação
* Usar o comando: npm start

7.Montar o banco de dados
* Usar o comando: npm run create
* E depois usar o comando: npm run seed

8.Para iniciar o 'Nodemon' (monitora qualquer alteração em sua fonte e reinicia automaticamente o servidor)
* Usar o comando: npm run dev

9.Para restaurar o banco de dados
* Usar o comando: npm run drop
* Depois usar o comando: npm run create
* E depois usar o comando: npm run seed

10.Verificação da API
* Para verificar as chamadas da API e suas respostas podem ser utilizadas algumas plataformas como o Postman, Insomnia ou o Thunder Client que é uma extensão do VS Code

11.Para verificar erros de eslint
* Usar o comando: npm run lint

## 📦 Desenvolvimento do projeto

  Este projeto foi desenvolvido utilizando o ORM Sequelize para criar e atualizar o banco de dados. 
  Serão 4 tabelas: 
  * 'Clients' para armazenar dados dos clientes de login e saldo da conta
  * 'BrokerAssets' que terá as ações disponíveis da Corretora de Valores
  * 'Operations' que armazena todos os tipos de transações referentes às ações
  * 'Accounts' que mantém dinamicamente, uma lista de ações de cada cliente, conforme a compra ou venda das mesmas

  Foram criadas 8 rotas levando em consideração as regras de negócio e dos contratos dos serviços.
  * Endpoint (/login) faz o login do cliente gerando um token com autenticação JWT Token, sendo utilizado para validação das demais rotas
  * Endpoint (/investments/buy) rota para compra de ações
  * Endpoint (/investments/sell) rota para venda de ações
  * Endpoint (/assets/client/:id) retorna todas as ações de um cliente específico
  * Endpoint (/assets/:id) retorna todas as ações disponíveis da Corretora de Valores
  * Endpoint (/account/deposit) rota para depósito na conta digital
  * Endpoint (/account/withdraw) rota para saque na conta digital
  * Endpoint (/account/:id) retorna o saldo de um cliente específico
---
