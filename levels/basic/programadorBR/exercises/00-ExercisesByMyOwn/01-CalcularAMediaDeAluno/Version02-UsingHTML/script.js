/*

# Exercício de JavaScript
Faça um script que pede duas notas de um aluno. Em seguida ele deve calcular a média do aluno e dar o seguinte resultado:
A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
A mensagem "Reprovado", se a média for menor do que sete;
A mensagem "Aprovado com Distinção", se a média for igual a dez. 

*/


function media(){
    let n1 = parseFloat(document.getElementById("n1").value); //Peguei o valor do input com esse ID e converti;
    let n2 = parseFloat(document.getElementById("n2").value); // Peguei o valor do input com esse ID e converti;

    let media = (n1 + n2)/2;


   if (media >=7)
        if(media==10)
        alert("Aprovado com distinção");
        else
        alert("Parabens, aprovado! Media "+media);
    else
    alert("Reprovado!");
}



// Link: https://www.javascriptprogressivo.net/2018/08/Calcular-Media-Aprovado-Reprovado-Exercicio-Resolvido-Codigo-Comentado.html





