//Aluna Jéssica Gustavo do Nascimento- GRR20185004

//Exercício 5- Conta letras

/*	Crie uma função que conta a quantidade de aparições de uma dada letra em uma string.*/

var s = "Aula de web1"
var j = 0;
for (var i = 0; i < s.length; i++) {
  if (s[i] === "e" || s[i] === "E") {
    j = j + 1;
  }
}

console.log(j);