// 8. Criando Novos Arrays a Partir de Objetos
// ○ Objetivo: Crie um array de objetos filmes, onde cada filme tem titulo, diretor, e anoLancamento.
//Use forEach para criar um novo array contendo apenas os títulos dos filmes.

let filmes = [
  {
    titulo: "O Poderoso Chefão",
    diretor: "Francis Ford Coppola",
    anoLancamento: 1972,
  },
  {
    titulo: "Um Sonho de Liberdade",
    diretor: "Frank Darabont",
    anoLancamento: 1994,
  },
  { titulo: "Os Vingadores", diretor: "Joss Whedon", anoLancamento: 2012 },
  {
    titulo: "O Senhor dos Anéis, O Retorno do Rei",
    diretor: "Peter Jackson",
    anoLancamento: 2003,
  },
];

let titulosFilmes = [];

filmes.forEach((chave) => {
  titulosFilmes.push(chave.titulo);
});

console.log(titulosFilmes);
