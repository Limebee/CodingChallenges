/*
Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.

Examples: (Input --> Output)

[] --> []
["a", "b", "c"] --> ["1: a", "2: b", "3: c"]
*/


let number=function(array){
  let numArray = [];
  for(let i = 0; i < array.length; i++){
    numArray.push(i+1 + ': ' + array[i])
  }
  return numArray;
}

//create an empty array
//create a for loop to iterate through the array
//use string concatenation that creates the line with the number
//add 1 to the iterator to get the number
//return the new array
