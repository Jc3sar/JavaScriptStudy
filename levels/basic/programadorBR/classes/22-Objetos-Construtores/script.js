
// JEITO 1:

// let calcMedia = function(){
//     return (this.nota1 + this.nota2)/2;
// }

// let turmas = [
//             {nome: 'igor',
//             nota1: 9,
//             nota2: 7,
//             media: calcMedia},

//             {nome: 'João',
//             nota1: 4,
//             nota2: 8,
//             media: calcMedia}
        // ]
// let aluno = turmas[1];
 // console.log(aluno);
// console.log(aluno.media());
// E seu digitar errado2 E fácil digitar uma nota errada e atraplahr tudo

// Uma das formas de resolver isso é criar uma função que cira alunos

// ---------------------------------------------------------------- \\


// Jeito 2:


// function criarAluno(nome, n1, n2){
    //Vai retornar um objeto;

//     return {
//         nome: nome,
//         nota1: n1,
//         notas2: n2,
//         media: function () {
//             return (n1 + n2) / 2;
//         }
//     }

// }

// Agora adicionar a função dentro de um array:

// let turma = [
//     criarAluno("igor", 5, 4),
//     criarAluno("Julio", 10, 7),
//     criarAluno("Almeida", 9, 7),
// ] 

// TUDO NO JAVASCRIT É OBJETO
// Logo dentro do Aarray (Que no fudno é um objeto), existe um método chamado forEach


// turma.forEach(function(elemento){ // Passa-se uma função;
//     console.log(elemento); // Ele imprime cada um
// })

// Jeito anterior:
// for (let aluno of turma){
//     console.log(aluno.nome + " - " + aluno.media());
// }

// var aluno = [turma[0], turma[1]];
// console.log(aluno);
// console.log(aluno.media()); 
// ---------------------------------------------------------------- \\


// JEITO 3
// Lembra o jeito JAVA

function aluno(nome, n1, n2){ // também cria um aluno, é como se fosse a classe.
    this.nome = nome;
    this.n1 = n1;
    this.n2 = n2;

    this.media = function (){
        return (this.n1 + this.n2) / 2;
    }
}

var a = new aluno("Igor", 8, 7); // Eu preciso usar a palavrinha NEW (Construtor) => Isso se chama instanciar, pegar um modelo de objeo e criar um objeto.
console.log(a);
console.log(a.media());