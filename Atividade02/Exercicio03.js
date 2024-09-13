// 3. Filtrando Propriedades de Objetos ○ Objetivo: Dado um objeto produto com várias propriedades, crie uma
// função que retorna um novo objeto contendo apenas as propriedades cujo valor
//seja maior que um valor específico. Use for in para filtrar as propriedades.

function computador(processador, memoria, armazenamento, fonte, gpu) {
  return {
    processador,
    memoria,
    armazenamento,
    fonte,
    gpu,
  };
}
let computador1 = computador(
  "I9 10th",
  "32GB",
  "1TB",
  "400W",
  "RTX 4080 8GB ram",
  () => {
    return "computador";
  }
);
console.log(computador1);
for (let cpu in computador1) {
  console.log(`${cpu}: ${computador1[cpu]}`);
}
