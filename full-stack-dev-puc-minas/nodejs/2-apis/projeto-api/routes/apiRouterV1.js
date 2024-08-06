var express = require('express');
var apiRouterV1 = express.Router();

var produtos = [
  { "id": 1, "produto": "Camiseta", "marca": "Nike", "preco": 49.99 },
  { "id": 2, "produto": "Tênis", "marca": "Adidas", "preco": 129.99 },
  { "id": 3, "produto": "Jaqueta", "marca": "Puma", "preco": 89.99 },
  { "id": 4, "produto": "Vestido", "marca": "Zara", "preco": 69.99 },
  { "id": 5, "produto": "Calça Jeans", "marca": "Levi's", "preco": 99.99 },
  { "id": 6, "produto": "Bermuda", "marca": "Reebok", "preco": 39.99 },
  { "id": 7, "produto": "Blusa", "marca": "Gap", "preco": 59.99 },
  { "id": 8, "produto": "Saia", "marca": "H&M", "preco": 29.99 },
  { "id": 9, "produto": "Casaco", "marca": "Columbia", "preco": 119.99 },
  { "id": 10, "produto": "Meias", "marca": "Under Armour", "preco": 19.99 }
];

apiRouterV1.get('/produtos', function(req, res, next) {
  res.json(produtos)
});

apiRouterV1.get('/produtos/:id', function(req, res, next) {
  let id = req.params.id;
  if (id) {
    idInt = Number.parseInt(id)
    let idx = produtos.findIndex(o => o.id === idInt)
    if (idx > -1) {
      res.json(produtos[idx])
    }
    else {
      res.status(404).json({ message: `Produto não encontrado`})
    }
  } 
  else {
    res.status(404).json({ message: `Produto não encontrado`})
  }
});

module.exports = apiRouterV1;
