//7. Modificando Objetos em um Array
// ○ Objetivo: Crie um array de objetos produtos, onde cada objeto tem nome, preco, e desconto.
//Use forEach para aplicar um desconto de 10% em todos  os produtos e exibir o novo preço.

let produtos = [
  { name: "Arroz", preço: 5.25, desconto: 0.1 },
  { name: "Feijão", preço: 4.25, desconto: 0.1 },
  { name: "Carne", preço: 37.9, desconto: 0.1 },
  { name: "Pão", preço: 0.3, desconto: 0.1 },
];
produtos.forEach((chave) => {
  let valorDesconto = chave.preço * (1 - chave.desconto);
  console.log(
    `O valor do produto: ${
      chave.name
    }, com desconto de 10% ficará R$${valorDesconto.toFixed(2)}`
  );
});
