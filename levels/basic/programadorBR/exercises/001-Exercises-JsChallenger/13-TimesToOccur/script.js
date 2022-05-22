// Write a function that takes two strings (a and b) as arguments
// Return the number of times a occurs in b
function myFunction(a, b){
   var q = 0;
   for (i = 0; i < b.length; i++){
      if (a == b[i]) q++;
   }
   return q;
}
   

/*The author's solution

function myFunction(a, b) {
  return b.split(a).length - 1 [PESQUISAR]
}

*/
