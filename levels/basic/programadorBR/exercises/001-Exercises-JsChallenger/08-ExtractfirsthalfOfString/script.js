// Write a function that takes a string (a) as argument
// Extract the first half a
// Return the result
function myFunction (a)
{
    return a.slice(0, a.length / 2);
}   


/*
=====> The first parameter defines the index of the first character in the string that you want to extract. 
=====> The second parameter defines the index of the first character that you DO NOT want to extract.

For this task we will use both parameters of the slice method (startIndex and endIndex). startIndex sSHOULD BE 0 because we want to start at the beginning of the array. 
endIndex should equal the index of the first character that you DO NOT WANT to be included in the result. */