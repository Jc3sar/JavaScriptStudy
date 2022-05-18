// Write a function that takes 6 values (a,b,c,d,e,f) as arguments
// Sum a and b
// Then substract by c
// Then multiply by d and divide by e
// Finally raise to the power of f and return the result
// Tipp: mind the order

function myFunction(a, b, c, d, e, f) {
    var result = Math.pow(((((a + b) - c) * d) / e), f);
    return result;
 }


/* The author's solution
function myFunction(a, b, c, d, e, f) {
   return (((a + b - c) * d) / e) ** f;
}
*/


/*First solution
function myFunction(a, b, c, d, e, f) {
   var before = ((((a + b) - c) * d) / e)
   var after = Math.pow(before, f);
   return after;
}
*/

/* The author's solution
function myFunction(a, b, c, d, e, f) {
   return (((a + b - c) * d) / e) ** f;
}
*/

// A função Math.pow() retorna a base elevada ao expoente power, ou seja, baseexpoente
// Finally raise to the power of f and return the result = Finalmente aumenta a potência de f e retorna o resultado