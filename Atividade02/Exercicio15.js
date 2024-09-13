// 15. Filtrando e Somando Valores
// ○ Objetivo: Crie um array de objetos transacoes, onde cada transação temtipo (entrada ou saída) e valor.
// Use forEach para calcular o saldo final, somando as entradas e subtraindo as saídas.

let transacoes = [
  { tipo: "entrada", valor: 1500.23 },
  { tipo: "entrada", valor: 2600.98 },
  { tipo: "entrada", valor: 700.33 },
  { tipo: "saida", valor: 1500.9 },
  { tipo: "entrada", valor: 15000 },
  { tipo: "saida", valor: 8000 },
  { tipo: "saida", valor: 5000.54 },
  { tipo: "entrada", valor: 600 },
  { tipo: "saida", valor: 1379.92 },
];
let saldo = 0;
transacoes.forEach((transacoes) => {
  if (transacoes.tipo === `entrada`) saldo += transacoes.valor;
  else if (transacoes.tipo === `saida`) saldo -= transacoes.valor;
});
console.log(`O saldo final é: R$${saldo.toFixed(2)}`);
