function saudacao(){ // Esssa dessa vez não ter argumento;
    return 'Olá mundo!';
}

var s = saudacao(); 
// Seu eu não coloar (), ele imprime o formato da função, eu basicamente atribuo a variável s a função e não o retorno dela
console.log(s);

//Já que agora s é uma função, eu posso fazer isso:
// console.log(s()); Como se ue 'trocasse de nome de função';



//Voltando com o exemplo da media
function media(n1, n2){
    var media = (n1 + n2) / 2;
    return media;
}


var resultado = media(6, 7);
var m = media;

var resultado2 = m(2, 3);
console.log(resultado);
console.log(resultado2);




// Isso permite criar FUNÇÕES ANÔNIMAS, não preciso
var mediaVar = function (n1, n2){
    return (n1 + n2) / 2;
}

console.log("Usando Função anônima: " + mediaVar(5, 6));
// Eu consigo por uma função dentro de um variável

//[Importante]: nas versões atuais dem algo chamado 'Seta' ou 'Arrow'=> , que permite não precisar usar a palavra function, exemplo:
// var variavel = (n1, n2) => {
//     return (n1 + n2) /2;
// } 
// Isso se chama ARROW Function, provávelmente usado em REACT