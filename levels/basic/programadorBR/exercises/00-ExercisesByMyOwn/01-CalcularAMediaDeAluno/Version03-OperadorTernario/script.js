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

    // Constantes
    const aprovado =  media >= 7 && media < 10;
    const aprovadoComDistincao = media == 10;
    const dadosIncorretos = media > 10;
    
    const mensagem = aprovado ? ("Parabens, aprovado! Media " + media)
    : aprovadoComDistincao ? ("Aprovado com distinção") 
    : dadosIncorretos ? ("Preencha os dados da nota corretamente")   
    : ("Reprovado");
    alert(mensagem);
}


// function media(){
//     let n1 = parseFloat(document.getElementById("n1").value); //Peguei o valor do input com esse ID;
//     let n2 = parseFloat(document.getElementById("n2").value); // Peguei o valor do input com esse ID;;

//     let media = (n1 + n2)/2;

//     media >= 7 && media < 10 ? alert("Parabens, aprovado! Media " + media) 
//     : media == 10 ? alert("Aprovado com distinção") 
//     : media > 10 ? alert("Preencha os dados da nota corretamente")   // Tive que adiconar mais um;
//     : alert("Reprovado");
// }


/*
    DICAS: 
     - Isolar a condição do IF TERNÁRIO em uma variável;
     - Normalmente o IF TERNÁRIO é usado para retornar um valor;
     - Ele sempre retornar alguma coisa;
     - Sobre o 'Preconceito de menos linhas' = se tiver menos linhas e for LEGÍVEL, tá ok! 

*/



// Link: https://www.javascriptprogressivo.net/2018/08/Calcular-Media-Aprovado-Reprovado-Exercicio-Resolvido-Codigo-Comentado.html





