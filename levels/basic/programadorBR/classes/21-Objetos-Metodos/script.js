// Objetos também podem ter Métodos, que são FUNÇÕES
// Quando um objeto tem uma variável a gente chama de PROPRIEDADE;
// Quando um objeto tem uma função a gente chame de MÉTODO;
// ------------------------------------------------------- \\




// Mas e se o cálculo da média MUDAR? => Para isso deixa-se a função fora do Objeto.
/* JEITO ANTERIOR:

var calcMedia = function(n1, n2){
            return (n1 + n2) / 2;
        }

var aluno1 = {
    nome: "Júlio",
    notas: [5, 8],
    media: calcMedia (notas[0], notas[1]), // Esse jeio não vai, o js não reconhece
}

var aluno2 = {
    nome: "Vinicius",
    notas: [6, 8],
    media: calcMedia (notas[0], notas[1]),
}


// Parte 1:
// console.log(aluno1);
// console.log(aluno1.media(aluno   1.notas[0], aluno1.notas[1]));

// console.log(aluno2);
// console.log(aluno2.media(aluno2.notas[0], aluno2.notas[1]));

// Parte 2:
console.log(aluno1);
console.log(aluno1.media);

console.log(aluno2);
console.log(aluno2.media); */


// ------------------------------------------------------- \\


/* DEPOIS: */


function calcMedia(){
     // Ele utilizou o 'THIS' somente após o parêntese estiver vazio, sem parâmetro. Assim, ele aponta para a variável/parâmetro que será o parâmetro;
     // Neste caso o this será o próprio Objeto;
    return (this.notas[0] + this.notas[1]) / 2; // O This sempre é utilizado no contexto de Objeto, ele sempre será o OBJETO!
    // Ele l~e assim => aluno1.notas[0], o THIS é o objeto!
}


var aluno1 = {
    nome: "Júlio",
    notas: [5, 8],
    media: calcMedia,
}


console.log(aluno1);
console.log(aluno1.media()); // Eu pricso colocar os dois parênteses se não ele imrpimi a função e não executa ela

