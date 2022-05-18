// Queremos verificar se um aluno passou ou não em uma prova.
var nota1 = 8.8;
var nota2 = 5.0;
var media = (nota1 + nota2) / 2;
// E se quisermos separar os alunos em BOM, ÓTIMO e REGULAR?

var conceito = "";

if(media >= 8){
    conceito = "Ótimo";
} else if(media >= 6.5) {
    conceito = "Bom";
} else {
    conceito = "Regular";
}

console.log("A média é", media);
console.log("\nA seu conceito é",conceito);

// conceito = "Test do Deaful do SWITCH";
switch(conceito){ //Essa é a variável que será analisada;

    case "Ótimo":
        console.log("\nParabéns! Você é um ótimo aluno!");
        break; // Esse comando precisa existir caso seja essa a condição;
    case "Bom":
        console.log("\nVocê está quase perfeito!");
    case "Regular":
        break;
        console.log("Estude mais um pouco!");
    default:  //Caso não seja nenhum dos valores acima
        console.log("Houve algum erro...");
        break;
}
