//2. Verificando Propriedades ○ Objetivo: Crie um objeto livro com propriedades titulo, autor,anoPublicacao e genero.
//Verifique se a propriedade editora existe no objeto usando for in. Se não existir, adicione essa propriedade ao objeto.

let book = {
  titulo: "A Guerra dos Tronos",
  autor: "George R. R. Martin",
  anoPublicacao: "6 de agosto de 1996",
  genero: "Romance, Quadrinhos, Literatura fantástica",
};
let existeEditora = false;
for (let characteristics in book) {
  if (characteristics === "editora") {
    editora = true;
    break;
  }
}
if (!existeEditora) {
  book.editora = "Não possui a informação da editora do livro";
}
console.log(book);
