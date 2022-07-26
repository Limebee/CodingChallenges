/*
Your task is to sum the differences between consecutive pairs in the array in descending order.

Example

[2, 1, 10]  -->  9
In descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).

*/


function sumOfDifferences(arr) {
    let arraySort = arr.sort((a,b) => b - a)
    let result = 0
    for(let i = 0; i < arraySort.length - 1 ; i++){
     result += (arraySort[i] - arraySort[i + 1])
  }
    
   return result
  }

  //sort array into descending order
  //create a variable to store the sum
  //create a for loop
  //subtract the consecutive pairs
  //add the differance to the sum
  //return the sum