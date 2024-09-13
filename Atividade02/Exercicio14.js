// 14. Manipulando Objetos Complexos
// ○ Objetivo: Crie um objeto empresa com uma propriedade departamentos, que é um array de objetos.
// Cada departamento tem um nome e uma lista de funcionarios. Use for in e for of para iterar sobre os departamentos
// e seus funcionários, exibindo o nome de cada funcionário junto com o departamento ao qual pertence.

const empresa = {
  departamento: [
    { nome: "Comercial", funcionario: ["Emerson", "Cristiano", "Joana"] },
    { nome: "Financeiro", funcionario: ["Lilian", "Cristina", "Ana"] },
    { nome: "Recursos Humanos", funcionario: ["Ester", "Júlio", "Bruna"] },
  ],
};

for (const departamento of empresa.departamento) {
  // alterado para for...of
  console.log(`Departamento ${departamento.nome}.`);
  for (const funcionario of departamento.funcionario) {
    console.log(`Funcionário: ${funcionario}.`);
  }
}
