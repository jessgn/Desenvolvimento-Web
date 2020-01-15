//Aluna Jéssica Gustavo do Nascimento- GRR20185004

//Exercício 4- Inverter elementos do Array

/* Crie uma função que inverte os elemento de um array. Essa função deve ser do tipo in-place, ou seja, deve realizar a inversão sem a necessidade de um array auxiliar.*/

var x = [ 5, 9, 11 ];

function arraytr(array) {
    var i;
    var i_troca;
    var j;

    for (i=0; i<Math.ceil(array.length/2); ++i) {
        i_troca = array.length - 1 - i;
        j = array[i];
        array[i] = array[i_troca];
        array[i_troca] = j;
    }

    return array;
}

console.log(arraytr(x));