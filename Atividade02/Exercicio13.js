// 13. Implementando um Carrinho de Compras
// ○ Objetivo: Crie um objeto carrinho com uma propriedade itens, que é um array de objetos.
// Cada objeto dentro de itens deve representar um produto no carrinho, com nome, quantidade, e precoUnitario.
// Use forEach para calcular o valor total do carrinho.

let carrinho = {
  itens: [
    { nomeProduto: "Molho de Tomate", quantidade: 2, precoUnitario: 2.9 },
    { nomeProduto: "Arroz", quantidade: 1, precoUnitario: 6.5 },
    { nomeProduto: "Farinha", quantidade: 3, precoUnitario: 2.45 },
    { nomeProduto: "Massa", quantidade: 2, precoUnitario: 3.5 },
    { nomeProduto: "Cerveja", quantidade: 12, precoUnitario: 4.99 },
  ],
};
let valorTotalCarr = 0;
carrinho.itens.forEach((chave) => {
  valorTotalCarr += chave.quantidade * chave.precoUnitario;
});

console.log(`O valor total das compras é: R$${valorTotalCarr.toFixed(2)}`);
