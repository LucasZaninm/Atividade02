// 9. Contabilizando Elementos com uma Condição ○ Objetivo: Crie um array de objetos clientes, cada um com propriedades
// nome, idade, e cidade. Use forEach para contar quantos clientes têm mais de 30 anos.

let cliente = [
  { nome: "Lucas", idade: 35, cidade: "Porto Alegre" },
  { nome: "Joana", idade: 15, cidade: "Cachoeirinha" },
  { nome: "Ines", idade: 27, cidade: "Canoas" },
  { nome: "Pedro", idade: 72, cidade: "Alvorada" },
  { nome: "Carlos", idade: 47, cidade: "Viamão" },
  { nome: "Carol", idade: 53, cidade: "Porto Alegre" },
];
let contador = 0;
cliente.forEach((chave) => {
  if (chave.idade > 30) {
    contador++;
  }
});
console.log(`A quantidade de clientes com mais de 30 anos é ${contador}.`);
