// 10. Criando Relatórios com Objetos e Arrays
// ○ Objetivo: Crie um array de objetos vendas, onde cada objeto tem produto,quantidade e valor.
//Use forEach para calcular o valor total de vendas de todos os produtos.

let vendas = [
  { produto: "Notebook", quantidade: 30, valor: 4999.0 },
  { produto: "Mouse", quantidade: 100, valor: 180.0 },
  { produto: "Monitor", quantidade: 15, valor: 650.0 },
  { produto: "Fone", quantidade: 80, valor: 160.0 },
  { produto: "Teclado", quantidade: 65, valor: 220.0 },
];
let valorTotal = 0;
vendas.forEach((chave) => {
  valorTotal += chave.quantidade * chave.valor;
});
console.log(`O valor total das vendas é R$${valorTotal.toFixed(2)}.`);
