/*

# Exercício de JavaScript
Faça um script que pede duas notas de um aluno. Em seguida ele deve calcular a média do aluno e dar o seguinte resultado:
A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
A mensagem "Reprovado", se a média for menor do que sete;
A mensagem "Aprovado com Distinção", se a média for igual a dez. 

*/


function media(){
    let n1 = parseFloat(document.getElementById("n1").value); // Peguei o valor do input com esse ID;
    let n2 = parseFloat(document.getElementById("n2").value); // Peguei o valor do input com esse ID;;
    let media = (n1 + n2)/2;
    var conceito = "";


    if (media >= 7 && media < 10){
        conceito = "Bom";
    } else if (media == 10){
        conceito = "Ótimo";
    } else if (media < 7 && media >= 0){
        conceito = "Regular";
    }


    // if (media >= 7 && media < 10)
    //     conceito = "Bom";
    //         else if (media == 10)
    //         conceito = "Ótimo";
    //             else if (media < 7 && media >= 0)
    //             conceito = "Regular";
    // Só vai para a direita se ESTIVER UM DENTRO DO OUTRO!

    // NUNCA USE O IF SEM CHAVES!!!!
        
    // alert("As notas são " + n1 + " e " + n2);
    // alert("\nA média é " + media);
    
    switch(conceito){

        case ("Bom"):
            alert("Bom! Parabéns, Aprovado! Media " + media) 
            break;

        case ("Ótimo"):
            alert("Ótimo! Parabéns, Aprovado! Media " + media);
            break;

        case ("Regular"):
            alert("Reprovado, média " + media);
            break;

        default:
            alert("Preencha os dados corretamente");
            break;
        // Demorei 20 minutos para ver que era o Break que estava faltando;

    }

}



// Link: https://www.javascriptprogressivo.net/2018/08/Calcular-Media-Aprovado-Reprovado-Exercicio-Resolvido-Codigo-Comentado.html





