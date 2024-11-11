# Roteiro

- Desenho da API
  - JSON Schema
  - Open API 3.0
  - Implementação com Node.JS
- Ambiente e Tecnologias
  - Arquitetura da aplicação
  - Pacotes e scripts NPM
  - Debugger no Node.JS
  - Testes com o Postman

# Dependências

Para a nossa API, vamos utilizar o Node.Js e o NPM como plataforma de desenvolvimento, dada a aptidão deste ambiente para a criação de aplicações Web modernas e sua simplicidade intrínseca. De toda forma, os conceitos aplicados por meio desta plataforma encontram similares nas diversas plataformas de mercado.

Como editor de códigos e IDE, vamos utilizar o Visual Studio Code to an external site. que é muito recomendado para este tipo de projeto. Caso você já trabalhe com outra ferramenta, fique a vontade para adotar a alternativa de sua preferência pois isso, certamente dará a você maior agilidade no processo de desenvolvimento.

Inicialmente, vamos relacionar os componentes que precisamos e os pacotes que vamos incluir no nosso projeto para nos ajudar. Conforme arquitetura já discutida nas aulas anteriores, vamos utilizar os seguintes componentes:

- Framework Web que trata dos endpoints da nossa API: Express.JS to an external site.
- Banco de dados: NeDB to an external site. (*)
- Validação de definições JSON: JSON Schema - Validator to an external site.
- Interpretador JavaScript 6+: Babel to an external site.
- Pacotes auxiliares
  - Nodemon to an external site. - Execução do Node.Js com monitoramento de alterações de arquivos
  - Body-Parser to an external site. - Interpretação de dados das requisições HTTP
(*) O propósito aqui não é estender no entendimento das implementações específicas de armazenamento de dados. Desta forma, escolhemos um banco de dados mais simples que fornece a abstração necessária para o que precisamos. O NeDB possui uma interface similar ao MongoDB sem requisitar instalação de um servidor de bancos de dados para isso.

Não vamos nos estender em apresentar a instalação do Node.Js e NPM pois este conteúdo já foi visto em outras disciplinas, ou pode ser facilmente consultado em artigos disponíveis na Internet.

A partir do NPM, podemos utilizar uma configuração prévia do arquivo package.json que irá nos facilitar a instalação dos componentes necessários para o nosso projeto. Segue o arquivo com as definições do nosso projeto:

~~~json
{
  "name": "apiContatos",
  "version": "1.0.0",
  "description": "",
  "main": "server.js",
  "scripts": {
    "start": "nodemon --exec babel-node src/server.js",
    "build": "babel src --out-dir dist",
    "serve": "node dist/server.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "body-parser": "^1.18.3",
    "express": "^4.16.4",
    "jsonschema": "^1.2.4",
    "nedb": "^1.8.0"
  },
  "devDependencies": {
    "@babel/cli": "^7.4.3",
    "@babel/core": "^7.4.3",
    "@babel/node": "^7.2.2",
    "@babel/preset-env": "^7.4.3"
  }
}
~~~

Para montar o ambiente do nosso projeto, basta criar uma pasta, incluir o arquivo package.json com o código acima e executar o comando de inicialização do NPM:

```npm install```

Com isso, todos os pacotes necessários para o nosso ambiente serão instalados automaticamente. A exceção fica por conta do nodemon que é instalado globalmente. Para isso, basta executar o comando a seguir:

```npm install nodemon -g```

# Arquitetura de pastas

No quadro a seguir, é apresentada a estrutura de pastas e arquivos do nosso projeto.

~~~
Pasta do Projeto
├───dist
├───node_modules
├───src
│   └───server.js                   --- Ponto de entrada da aplicação (entry point) 
│   └───api-v1
│       ├───api-v1.js               --- Router da API na versão 1
│       ├───models
│       │    └───pessoa-model.js    --- Modelo para a entidade / recurso Pessoa
│       ├───paths
│       │    └───pessoa-router.js   --- Router específico para o recurso Pessoa
│       └───utils
│            └───db.js              --- Middleware responsável por salvar dados no BD
├───APIContatos-OAS.yaml            --- Documentação da API no padrão OAS 3.0
└───package.json                    --- Arquivo de configuração do NPM
~~~