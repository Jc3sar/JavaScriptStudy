// Write a function that takes a number (a) as argument
// If a is a whole number (has no decimal place), return true
// Otherwise, return false

function myFunction(a) {
   return a % 2  == 0 ? true : false;
}


//The author's solution
function myFunction(a) {
  return a - Math.floor(a) === 0
}

