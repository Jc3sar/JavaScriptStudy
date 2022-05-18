// Estruturas condicionais checam se algo é verdade ou mentira visando tomar um determiando caminho de acordo com a resposta;
// Exemplo:

// Avaliando se é maior ou não de idade;
// Sem bloco 
var idade = 17; 

if (idade > 18) 
    console.log("Pode");
else 
    console.log("Não pode");

// Com bloco

var idade = 2; 

if (idade >= 35) {
    console.log("Pode");
    console.log("Qual é o seu pedido?");
}
else if(idade >= 18) {
    console.log("Pode");
    console.log("Mostre a identidade");
} else{
    console.log("Não pode");
    console.log("Volte futuramente");
}


// A valiando com opradores Lógicos
var idade = 50; 
if (idade >= 18 && idade <= 70) { // com ||  (idade <= 18 || idade >= 70), basta mudar o sinal para ter lógica. Com 'Ou' basta um deles ser verdade;
    console.log("Pode entrar");
}
