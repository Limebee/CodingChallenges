/*
I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.
*/


function arrayPlusArray(arr1, arr2) {
    let arr1Sum = arr1.reduce((curr, total) => curr + total, 0);
    let arr2Sum = arr2.reduce((curr, total) => curr + total, 0);
     return arr1Sum + arr2Sum;
   
  }

  //use reduce to find the sum of each array
  //add both of the array sums together
  //return it