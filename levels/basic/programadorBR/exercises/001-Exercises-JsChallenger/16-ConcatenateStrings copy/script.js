// Write a function that takes two strings (a and b) as arguments
// If a contains b, append b to the beginning of a
// If not, append it to the end
// Return the concatenation

function myFunction(a, b) {
  if (a.includes(b)) b + a; // O método includes() determina se um conjunto de caracteres pode ser encontrado dentro de outra string, retornando true ou false.
  else return a + b;
}

/* HINT (Outra forma de fazer)
var a = 'Hell';
var b = 'o';
a = a.concat(b);
console.log(a); // Print Hello
*/


//The author's solution
function myFunction(a, b) {
  return a.indexOf(b) === -1 ? a + b : b + a
}