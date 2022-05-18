// Numbers as Numbers
var a = 3;
var b = 6;
console.log("A =", a ," B =", b);
var c = a + b;
console.log("Valor da soma de A e B (Numbers): ", c);

// Numbers as Strings
var a = "3";
var b = "6";
console.log("\nA =", a ," B =", b);
var c = a + b;
console.log("Valor da soma de A e B (Strings): ", c); // Contatenou

//Pra transformar String em Número (Inteiros):
var a = "3";
var b = "6";
console.log("\nA =", a ," B =", b);
var c = parseInt(a) + parseInt(b);
console.log("Valor da soma de A e B (Após parseInt): ", c);


//Pra transformar String em Número (Decimais):
var a = "3.5";
var b = "6.8";
console.log("\nA =", a ," B =", b);
var c = parseFloat(a) + parseFloat(b);
console.log("Valor da soma de A e B (Após parseFloat): ", c);