// + Adição
// - Subtração
// Multiplicação
// / Divisão
// % Módulo
// ++ Incremento
// Decremento
/*-------------------------*/


// Adição:
var a = 15;
var b = 10;
var c = a + b;
console.log("Resultado da Adição é " + c);

// Subtração
var c = a - b;
console.log("Resultado da subtração é " + c);

// Multiplicação
var c = a * b;
console.log("Resultado da multiplicação é " + c);

// Divisão
var c = a / b;
console.log("Resultado da divisão é " + c);

// Módulo
var c = a % b;
console.log("Resultado do módulo é " + c);
// O valor que mostra é o que SOBRE/RESTA da divisão;

// Incremento (Sinal na frente (depois) ou atrás (antes) da variável)
// Na frente (depois)
console.log("\nIncremento com ++ na frente (depois)")
var inc1 = 30;
console.log("Valor antes do incremento1: " + inc1)
inc1++;
console.log("Valor depois do incremento1: " + inc1)


// Atrás (Antes)
console.log("\nIncremento com ++ atrás (antes)")
inc1 = 30;
console.log("Valor antes do incremento1: " + inc1)
++inc1;
console.log("Valor depois do incremento1: " + inc1)



//Agora usando duas variáveis

// Atrás (antes)
console.log("\nUTILIZANDO DUAS VARIÁVEIS:");
console.log("\nIncremento com ++ atrás (antes)");
var inc2 = 30;
inc1 = 30;
console.log("Valor antes do incremento2: " + inc2);
inc2 = ++inc1;
console.log("Valor depois do incremento2: " + inc2);
console.log("Valor do incremento1 " + inc1);
console.log("Ele Incrementa e depois guarda");
// Quando o sinal vem antes, ele incrementa e depois pega o resultaod e guarda na variável
// Incremente e depois guarda


// Na frente (Depois)
console.log("\nIncremento com ++ Na frente (depois)")
var inc2 = 30;
inc1 = 30;
console.log("Valor antes do incremento2: " + inc2);
inc2 = inc1++;
console.log("Valor depois do incremento2: " + inc2);
console.log("Valor do incremento1 " + inc1);
console.log("Ele guarda e só depois incrementa");
// Quando o sinal vem depois, primeiro guarda o valor da variável inc1 dentro de inc2 e só depois ele vai incrementar;
// Guarda e depois incrementa
// Tudo isso se aplica para o decremento também




