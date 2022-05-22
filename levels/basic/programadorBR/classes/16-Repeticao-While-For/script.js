// O for serve para repetir algo uma certa quantia de vezes

/*var number = 5;

for (var i = 0; i  < 5; i ++){ //Cada parte é spearada por ponto e vírgula (;);
    console.log(`Executando o for, pela ${i} vez` + " Com sucesso");
}

console.log('acabou');*/



// var numero = 6;

// while (numero < 10){
//     console.log("Número " + numero);
//     numero++;
// }

// console.log('acabou');



var aleatorio = Math.random() * 100; 
// Math.random()Gera um número randômico entre 0 e 1, por isso a gente multiplia por 100, logo pula duas casas;
console.log("Número ANTES: " + aleatorio + "\n");

while (aleatorio < 90){
    aleatorio = Math.random() * 100;
    console.log("Número DEPOIS: " + aleatorio);
}

// WHILE -> Não sabemos quando algo vai acabar, por isso é utilizado neste contexto


