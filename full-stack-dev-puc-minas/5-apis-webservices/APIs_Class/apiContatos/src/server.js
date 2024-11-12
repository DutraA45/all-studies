import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';

import apiRouter from './api-v1/api-router';

const app = express();

// associar o json ao objeto req.body
app.use (bodyParser.json());

// associa os parametros de URL e Body com fformato urlEncoded
// ao objeto req.params
app.use (bodyParser.urlencoded( { extended: false } )); 

app.use ('/api/v1', apiRouter );
app.use ('/', (req, res) => res.send ('-- API Contatos --') );

const porta = 5500;
http.createServer(app).listen(porta, () => 
    console.log(`Servidor pronto na porta ${porta}`));
