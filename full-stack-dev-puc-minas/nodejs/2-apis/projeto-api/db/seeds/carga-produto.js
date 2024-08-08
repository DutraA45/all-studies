/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('produtos').del()
  await knex('produtos').insert([
    { "id": 1, "descricao": "Camiseta", "marca": "Adidas", "preco": 59.99 },
    { "id": 2, "descricao": "Tênis", "marca": "Nike", "preco": 149.99 },
    { "id": 3, "descricao": "Jaqueta", "marca": "North Face", "preco": 199.99 },
    { "id": 4, "descricao": "Boné", "marca": "New Era", "preco": 34.99 },
    { "id": 5, "descricao": "Chinelo", "marca": "Havaianas", "preco": 24.99 },
    { "id": 6, "descricao": "Moletom", "marca": "Puma", "preco": 79.99 },
    { "id": 7, "descricao": "Relógio", "marca": "Casio", "preco": 89.99 },
    { "id": 8, "descricao": "Óculos de Sol", "marca": "Ray-Ban", "preco": 129.99 },
    { "id": 9, "descricao": "Cinto", "marca": "Tommy Hilfiger", "preco": 49.99 },
    { "id": 10, "descricao": "Meias", "marca": "Nike", "preco": 19.99 }
  ]);
};
