// 6. Filtrando Arrays de Objetos
// ○ Objetivo: Crie um array de objetos funcionarios, onde cada objeto contém informações como nome, cargo, e salario. Use for of para filtrar
// e exibir apenas os funcionários cujo salário seja maior que um valor específico.

let funcionarios = [
  { nome: "Renato", cargo: "Gestor de pessoas", salario: 15000 },
  { nome: "Geromel", cargo: "Gerente Comercial", salario: 5000 },
  { nome: "Cristaldo", cargo: "Diretor", salario: 4500 },
  { nome: "Dodi", cargo: "Auxiliar de produção", salario: 1500 },
  { nome: "Monsalve", cargo: "Gerente de Projeto", salario: 7500 },
];
for (const chave of funcionarios) {
  if (chave.salario >= 5000) {
    console.log(
      `Os funcionário com salários maiores ou iguais a R$5000,00. São: ${chave.nome}`
    );
  }
}
