// 11. Agrupando Elementos com forEachc ○ Objetivo: Crie um array de objetos pedidos, onde cada pedido tem
// cliente, produto, e quantidade. Use forEach para criar um objeto que agrupa a quantidade total de produtos
//por cliente.

let pedidos = [
  { cliente: "Lucas", produto: "Óculos", quantidade: 1 },
  { cliente: "Fábio", produto: "Camisa", quantidade: 4 },
  { cliente: "Maria", produto: "Vestido", quantidade: 3 },
  { cliente: "Gabriela", produto: "Tênis", quantidade: 2 },
];
let quantProdutoCliente = [];
pedidos.forEach((chave) => {
  quantProdutoCliente.push(
    `Cliente: ${chave.cliente}. Quantidade de produtos comprados: ${chave.quantidade}`
  );
});
console.log(quantProdutoCliente);
