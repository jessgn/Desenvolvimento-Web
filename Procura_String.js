//Aluna Jéssica Gustavo do Nascimento- GRR20185004

//Exercício 6- Substring

/*	Crie uma função que procura por uma substring dentro um uma string. Caso o trecho procurado exista na string, a função retorna a posição em que o trecho começa.
	Caso contrário, a função deve retornar o valor -1. 	O programa não pode utilizar nenhum método nativo do JS que realize a busca por substrings. */

var s = "Aula de web1"
var j = "web1";
var y = 0;
for (var i = 0; i < s.length; i++) {
  if (s[i] === j[y]) {
    y++;
    if (y === j.length) {
      break;
    }
  }
}
console.log(i+1-y);