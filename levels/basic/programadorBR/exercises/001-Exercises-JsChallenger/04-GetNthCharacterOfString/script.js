// Write a function that takes a string (a) and a number (n) as argument
// Return the nth character of 'a'
function myFunction(a, n){
 return a[n-1]; // Tem que colocar -1 porque conta a partir do 0 (Javascript strings are zero-indexed)
}

// HINT:
/*In order to get the nth character of a given string, you have to know its index. An index describes the position of a character in a given string. Javascript strings are zero-indexed. This means that the first character of a string has index 0. The second character has index 1 and so on. */