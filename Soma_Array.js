//Aluna Jéssica Gustavo do Nascimento- GRR20185004

//Exercício 3- Soma de array

/* Crie uma função que retorna a soma dos elementos de um array. */

var a = [1,2,3];

function arraySom(array) {
    var arrayLen = array.length;
    var som = 0;
    var i;

    for (i=0; i<arrayLen; ++i) {
       som += array[i];
    }

    return som;
}

console.log(arraySom(a));