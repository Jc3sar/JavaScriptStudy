// Há DUAS FORMAS de criar um Array ou vetor;

// PRIMEIRA FORMA:
var vetor = new Array("Igor", "João", "Almeida");
console.log(vetor);
/* Cada elemento do Array deve ser separado por uma vírgula.
Neste exemplo, todos os elementos são strings, mas poderiam ser números, booleano (verdadeiro ou falso) e etc.
Ou seja qualquer outro tipo que já vimos até aqui.
Inclusive poderia ser uma variável, um outro array, ou até mesmo um objeot, que veremos futuramente
*/

// SEGUNDA FORMA:
var alunos = ['Julio', 'Roberto', 'João'];
// Length é o tamanho do Array;
// O bom do ARRAY é porque com ele tem como usar o 'FOR' e imprimir cada valor dele;


var alunosUSP = ['Almeida', 'Roberto', 'Julio', 'Giane']
console.log('Usando for (i = 0; i < alunosUSP.length; i++):')
for (i = 0; i < alunosUSP.length; i++){
    console.log('O aluno é ' + alunosUSP[i]);
}


// OUTRAS FORMAS MEGA IMPORATANTE DE USAR FOR COM ARRAY
console.log('\nUsando (var i IN alunosUSP)')
for (var i in alunosUSP){ // Aqui ele avalia o INDEX
    console.log(i)
}

// VARIAÇÃO: Se eu usa 'OF' no lugar de 'IN', ele vai pegar o ELEMENTO DAQUELE INDEX AO INVÉS DE INDEX

console.log('\nUsando (var i OF alunosUSP)')
for (var i of alunosUSP){ // Aqui ele avalia O VALOR QUE ESTÁ DENTRO DO INDEX
    console.log(i)
} // Posso mudar o nomer da variável 'i' para 'aluno'