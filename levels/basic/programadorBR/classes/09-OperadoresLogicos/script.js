// && e
// || ou
// Negativo
// Eles servem quando eu quero avalisar dois valores booleanos


// Exemplos (com &&):
console.log("\nEXEMPLOS COM E &&:")
var a = true;
var b = false;
var c = a && b; // A é verdadeiro e B também é verdadeiro?
console.log("O resultado da comparação é", c)

// Mais exemplos
var idade = 35;
var maior20 = idade > 20;
var menor30 = idade < 30;
var entre = maior20 && menor30; // Maior20 é verdadeiro? e menor30 é verdaderio? Caso sim, a resposta é True, caso contrário, a resposta é False;

console.log("Idade é", idade);
console.log("Maior que vinte", maior20);
console.log("Menor que trinta ", menor30);
console.log("Entre 20 e 30", entre);


// Exemplos (com ||):
console.log("\nEXEMPLOS COM OU ||:");
var idade = 20;
var menor10 = idade <= 10;
var maior65 = idade >= 60;

var gratuidade = menor10 || maior65;
// Se um dos dois for veradadeiro, então o resultado é verdadeiro
// Basta um ser verdadeiro que o resultado será verdaderio (true)

console.log("Idade é", idade);
console.log("Maior que 65", maior65);
console.log("Menor que 10 ", menor10);
console.log("Tem direito a gratuidade?", gratuidade);



// Exemplos com Negação (Negativo)
// Ela só aplicada a variáveis do tipo booleano, e sempre que eu nego um valor verdadeiro ele passa a ser falso
// E quando eu nego um valor falso ele se torna verdadeiro
console.log("\nEXEMPLOS COM NEGAÇÃO '!'");
var idade2 = 15;
var maior20 = idade2 >= 20;
var menor20 = !maior20; //O menor20 é falso, mas quando eu coloco ! antes ele se torna verdaderio (true);

console.log("Maior que 20", maior20);
console.log("Menor que 20", menor20); //Logo aqui fica true;
console.log("\nApenas true: ", true);
console.log("Com !true:", !true);
console.log("\nApenas false: ", false);
console.log("Com !false: ", !false);









