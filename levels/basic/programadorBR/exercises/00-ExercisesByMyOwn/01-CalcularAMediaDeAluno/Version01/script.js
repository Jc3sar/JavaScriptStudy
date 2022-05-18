/*

# Exercício de JavaScript
Faça um script que pede duas notas de um aluno. Em seguida ele deve calcular a média do aluno e dar o seguinte resultado:
A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
A mensagem "Reprovado", se a média for menor do que sete;
A mensagem "Aprovado com Distinção", se a média for igual a dez. 

*/


let n1;
let n2;
let media;
n1 = parseFloat(window.prompt("Qual a primeira nota?"));
n2 = parseFloat(window.prompt("Qual a segunda nota?"));
media = (n1 + n2) / 2;

if (media >= 5 && media < 10) alert("Aprovado")
    else if (media < 7 ) alert("Reprovado")
        else if (media = 10) alert("Aprovado com Distinção")

// Link: https://www.javascriptprogressivo.net/2018/08/Calcular-Media-Aprovado-Reprovado-Exercicio-Resolvido-Codigo-Comentado.html





