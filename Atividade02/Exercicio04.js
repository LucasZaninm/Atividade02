//4. Iterando Sobre Arrays de Objetos ○ Objetivo: Crie um array de objetos pessoas, onde cada objeto representa
// uma pessoa com nome, idade, e cidade. Use for of para exibir as informações de cada pessoa no console.

let pessoas = [
  { nome: "Lucas", idade: 35, cidade: "Porto Alegre" },
  { nome: "Joana", idade: 75, cidade: "Gramado" },
  { nome: "Lucio", idade: 21, cidade: "Santa Rosa" },
  { nome: "Juliana", idade: 38, cidade: "Canela" },
];

for (const descricao of pessoas) {
  console.log(
    `Nome: ${descricao.nome}, Idade: ${descricao.idade}, Cidade: ${descricao.cidade}.`
  );
}
