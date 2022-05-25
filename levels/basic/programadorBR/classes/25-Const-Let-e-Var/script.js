// Let, Const e Var
var n1 = 4; // É UMA VARIÁVEL GLOBAL
let n2 = 5; // Foi inserido na versão s6 (EMASCRIP 2015) -> É uma variável LOCAL
const n3 = 6; // Foi inserido na versão s6 (EMASCRIP 2015) -> É LOCAL
// Quando algo novo é adicionado, os navegadores precisam de um tempo para começar a rodar aqui que foi adicionado.


console.log(n1);
console.log(n2);
// console.log(n3); 
// CONSTANTE não pode ser reatribuida, mas o valor pode às vezes mudar
const n4 = [4];
console.log(n4);
n4.push(7); // . push adiciona um elemento novo dentro do array
console.log(n4); // Eu mudei o valor de um constante => Modfiqiquei o valor;

// A diferênça pro LET e pro VAR ocorre no escopo 

{
    let numero1 = 2; // Tem um escopo local (Só existe aqui dentro)
    var numero2 = 5;
    const numero3 = 8; // Tem um escopo local (Só existe aqui dentro)
}

console.log(numero2);
// [OBS] (Funções tê um escopo mais fechado e var só existe lá dentro)
// [OBS] Sempre ue for possível, iremos usar variáveis locais, faciltia na identificação de futureos possíveis erros;