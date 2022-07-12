/*
Given a sequence of numbers, find the largest pair sum in the sequence.

For example

[10, 14, 2, 23, 19] -->  42 (= 23 + 19)
[99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
Input sequence contains minimum two elements and every element is an integer.

*/



function largestPairSum (numbers) {
    let sortArray = numbers.sort((a,b) => a - b);
    return sortArray[sortArray.length - 1] + sortArray[sortArray.length - 2];
  }

  //sort the array in ascending order using the sort method
  //store the sorted array in variable
  //get the  2 largest numbers in the array using thier index 
  //subtract the array length by 1 and 2 to get the indexes
  //return the sum of the two numbers