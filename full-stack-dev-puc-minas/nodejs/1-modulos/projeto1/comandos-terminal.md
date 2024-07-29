# Comando utilizados no projeto 1

npm init
> package name: (projeto1)
> version: (1.0.0)
> description: Primeiro projeto em Node.js
> entry point: (index.js) server.js
> test command:
> git repository:
> keywords: npm projeto-node javascript
> author: Jefferson Dutra
> license: (ISC)

npm start
> projeto1@1.0.0 start
> node server.js

npm install express (Mais opções de flag nos slides da aula)
> added 64 packages, and audited 65 packages in 2s

npm install nodemon --save-dev
> added 29 packages, and audited 94 packages in 2s

npm run build (Era esperado o funcionamento do ls no terminal)
(build foi criado manualmente e adicionado no package.json)
> projeto1@1.0.0 build
> ls

Criar arquivo gitignore (para ignorar a pasta node_modules devido seu tamanho).

git init (para inicializar o rastreamento do git)
git status (para verificar arquivos rastreados pelo git)

npm list (Verificar todos os módulos instalados)
>├── express@4.19.2
>└── nodemon@3.1.4

npm list --depth=2(Verificar todos os módulos dependentes dos módulos instalados em 2 níveis de profundidade)
