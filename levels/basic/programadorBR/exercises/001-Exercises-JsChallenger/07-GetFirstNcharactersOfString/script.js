// Write a function that takes a string (a) as argument
// Get the first 3 characters of a
// Return the result

function myFunction(a)
{
    return a.slice(0, 3);
}

/*

HOW TO SOLVE IT

To get the first n characters of a string, I would use the slice method again.
As we have seen in previous tasks, we can use the slice method to extract a part of a string without modifying the original string.


=====> The first parameter defines the index of the first character in the string that you want to extract. 
=====> The second parameter defines the index of the first character that you DO NOT want to extract.

For this task we will use both parameters of the slice method (startIndex and endIndex). startIndex sSHOULD BE 0 because we want to start at the beginning of the array. 
endIndex should equal the index of the first character that you DO NOT WANT to be included in the result. 

Remember that strings are zero-indexed in Javascript (see this challenge for more information). Hence, if we want to extract the first n characters of a string, endIndex should simply equal n.
console.log('wxyz'.slice(0,2));
// output: 'wx'

*/


/*
=====> The first parameter defines the index of the first character in the string that you want to extract. 
=====> The second parameter defines the index of the first character that you DO NOT want to extract.

For this task we will use both parameters of the slice method (startIndex and endIndex). startIndex sSHOULD BE 0 because we want to start at the beginning of the array. 
endIndex should equal the index of the first character that you DO NOT WANT to be included in the result. */