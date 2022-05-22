/* Primeiro passo é saber O QUÊ EU QUERO TER NO FINAL, neste caso é:
    - Nota do aluno separado por nota 1, nota 2, média e dizer se ele está aprovado ou não;
    --------------------------------------------------------------------------------------------------------
*/

// Usando AWWAYS para armazenar os danos
var names = ["Igor", "José", "Maria"]; // Também pode criar asssim;
var notasA = [7.0, 6.5, 9.5];
var notasB = [8.0, 7.0, 8.5];

//Agora precisa de uma função p/ calcular a média;
function media (n1, n2){
    return (n1 + n2) / 2;
}

// Criando a lista:
for (var index in names){

    var nota1 = notasA[index]; // Elete colou os valores dentro de variáveis p/ pode ficar mais legíveld
    var nota2 = notasB[index];
    var m = media(notasA[index], notasB[index]) // Ele cirou outra varáivel aqui p/ guardar o resultado e poder usar a função passou lá embaixo

    console.log(names[index] + 
        " - " + nota1 + 
        " - " + nota2 + 
        " - " + m + 
        " - " + passou(m));
}

// Agpra só falta avalisar se ele está APROVADO ou NÃO, e para isso podemos também criar uma função;

function passou(media){
    // var resultado = "Reprovado"; // Fazendo isso me permita não utilizar o ELSE;
    // if (media > 7) resultado = "Aprovado"
    // return resultado; 

    if (media > 7) return "Aprovado";
    else return "Reprovado";

}