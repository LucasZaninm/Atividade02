//5. Calculando Valores em Arrays de Objetos ○ Objetivo: Crie um array de objetos alunos, cada um com propriedades
// nome, nota1, e nota2. Use for of para calcular a média das notas de cada
// aluno e exibir o nome do aluno junto com sua média.

let alunos = [
  { nome: "Pedro", nota1: 10, nota2: 10 },
  { nome: "Julio", nota1: 8, nota2: 7 },
  { nome: "Jonas", nota1: 4, nota2: 7 },
];
for (const notas of alunos) {
  let media = (notas.nota1 + notas.nota2) / 2;

  console.log(`Nome: ${notas.nome}, média: ${media}`);
}
