/*
Write a function that takes a positive integer n, sums all the cubed values from 1 to n, and returns that sum.

Assume that the input n will always be a positive integer.

Examples: (Input --> output)

2 --> 9 (sum of the cubes of 1 and 2 is 1 + 8)
3 --> 36 (sum of the cubes of 1, 2, and 3 is 1 + 8 + 27)

*/


function sumCubes(n){
    let i = 0;
    let sum = 0;
    while(i <= n){
      sum += Math.pow(i,3);
      i++;
    }
    return sum
  }

  //create a sum variable to store the sum of the cubes
  //use a while loop to square numbers between 1 to n
  //add squares to sum variable
  // return the sum