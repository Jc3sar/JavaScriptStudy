// Write a function that takes a string (a) as argument
// Remove the last 3 characters of a
// Return the result

function myFunction (a) {   
    // return a.slice(0, a.length - 3);
    // it can be a.slice(0, -3);
    return a.slice(0, -3);
}

alert(myFunction('ABCDef'));

/*
It is important to know, that you can call slice with a negative startIndex. 
In this case, startIndex is not an index but identifies the starting position by counting backwards FROM DE END of the string.

*/