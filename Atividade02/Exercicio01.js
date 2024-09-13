// Manipulação de Objetos
// 1. Acessando Propriedades de Objetos ○ Objetivo: Crie um objeto carro com propriedades como marca, modelo,
// ano, e cor. Use for in para iterar sobre as propriedades e exibir seus valores no console.

let car = {
  marca: "Mercedes",
  modelo: "SLK 300",
  ano: 2024,
  cor: "Vermelho",
};
for (let characteristics in car) {
  console.log(characteristics + ": " + car[characteristics]);
}
