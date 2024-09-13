// 12. Atualizando um Array de Objetos
// Objetivo: Crie um array de objetos estoque, onde cada objeto tem produto, quantidade e minimo.
// Use forEach para atualizar a quantidade dos produtos que estão abaixo do mínimo, duplicando suas quantidades.

let estoque = [
  { produto: "Martelo", quantidade: 18, minimo: 20 },
  { produto: "Chave de Fenda", quantidade: 40, minimo: 30 },
  { produto: "Alicate", quantidade: 8, minimo: 15 },
  { produto: "Marreta", quantidade: 10, minimo: 5 },
  { produto: "Estilete", quantidade: 50, minimo: 70 },
];
let produtosRepor = [];
estoque.forEach((chave) => {
  if (chave.quantidade < chave.minimo)
    produtosRepor.push(`${chave.produto} ${chave.quantidade * 2}un`);
});
console.log(`Os produtos a serem repostos são: ${produtosRepor.join(", ")}. `);
