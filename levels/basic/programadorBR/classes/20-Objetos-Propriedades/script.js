// Em objetos eu abro e fecho chaves! -> {}
// Em Array eu acesso através de índice, com objetos eu acesso através de Chaves!
var objeto = {
    nome: "Igor",// => Isso é um propriedade;
    nota: "7.5",
    chaveAleatoria: [7.5, 5.5] // Usando um Array dentro da Chave;
} // Sempre vem uma CHAVE e um VALOR e VÍRGULA;
// [IMPORTANTE]: Uma propriedade de um objeto pode receber um valor de qaulquer tipo que vimos, incluindo Arrays, e até mesmo um outro objeto.

// Para acessar a propriedade do objeto eu uso o '.' ou [nomeDaChave];
console.log(objeto.nome);
console.log(objeto["nome"]);
console.log(objeto.chaveAleatoria[0]);
console.log(objeto["chaveAleatoria"][0]); // => Outra forma de imprimir um valor do vetor
// Sempre que se fala de objeto, fala-se PROPRIEDADE do objeto e não 'variável do objeto';

// Há como adicionar propriedade ao objeto depois de criar também:

objeto.matricula = 12345; // => Adicionei uma nova propriedade;
console.log(objeto.matricula);
objeto["sobrenome"] = "Batista"; // => Outra forma de criar;
console.log(objeto.sobrenome);

//Vantagens da segunda forma:
var novaProp = "PrimeiroNome";
objeto[novaProp] = "Juliao"; // => Assim eu consigo adicionar por meio de variável;
console.log(objeto.PrimeiroNome);
// Assim eu consigo modificar, por que é uma String;

//Tem como criar assim também:
var aluno = new Object();
console.log(aluno);
aluno.nome = "Roberta";
console.log(aluno);





