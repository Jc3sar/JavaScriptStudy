// Write a function that takes two strings (a and b) as arguments
// If a contains b, append b to the beginning of a
// If not, append it to the end
// Return the concatenation

function myFunction(a) {
  return Math.round(a * 100) / 100;
}

/* We take the number and add a very small number, Number.EPSILON, to ensure the number’s accurate rounding. We then multiply by number with 100 before rounding to extract only the 
two digits after the decimal place. Finally, we divide the number by 100 to get a max of 2 decimal places.*/



//The author's solution
function myFunction(a) {
  return Number(a.toFixed(2)); // Eu tentei fazre assim, mas não coloquei o Number na frente
}

/*


Use the .toFixed() Method to Round a Number To2 Decimal Places in JavaScript
Use the Math.round() Function to Round a Number To2 Decimal Places in JavaScript

*/