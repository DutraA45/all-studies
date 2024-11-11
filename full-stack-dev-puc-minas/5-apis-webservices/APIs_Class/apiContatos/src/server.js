import http from 'http';
import express from 'express';

const app = express();

app.all ('/', (req, res, next) => res.send ('Tudo funcionando!') );

const porta = 5500;
http.createServer(app).listen(porta, () => 
    console.log(`Servidor pronto na porta ${porta}`));
