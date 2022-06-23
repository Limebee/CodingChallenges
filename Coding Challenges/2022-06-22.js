/*
Find Mean

Find the mean (average) of a list of numbers in an array.

*/


function findAverage(nums) {
    return nums.reduce((curr, total) => curr + total, 0) / nums.length
  }


  // use reduce method to get total of all the numbers in the array
  //divide the total by the length of the array
  //return the result