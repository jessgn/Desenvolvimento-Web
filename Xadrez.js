//Aluna Jéssica Gustavo do Nascimento- GRR20185004

//Exercício 2- Xadrez

/*  Escreva um programa que cria uma string que representa um quadro 8x8, utilizando o caractere de nova linha "\n" para separar cada uma das linhas. Por exemplo:"linha1..\nlinha2..". 
    Cada posição do quadro deve ser representada por um espaço em branco (" ") ou um "#". Os caracteres devem produzir a forma de um tabuleiro de xadrez. */

var cont = "";
var linha = 9;
var coluna = 9;

var troca = false;
var htag = "";
var i;
var j;

for (j=0; j<linha; ++j) {
    for (i=0; i<coluna; ++i) {
        if (troca === true) {
            troca = false;
            htag = '#';
        } else {
            troca = true;
            htag = ' ';
        }

          cont += htag;
    }
    cont += "\n";
}

console.log(cont);