/*
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

*/


function moveZeros(arr) {
    let zeros = arr.filter(num => num === 0);
    let noZeros = arr.filter(num => num !== 0);
    let zeroEnd = noZeros.concat(zeros);
      return zeroEnd;
  }

//use filter to create an array with all of the zeros from input array store it in zeros variable
//use filter to create another array without the zeros store it in noZeros variable
//use concat to add the zeros to noZeros and store it in zeroEnd
//return zeroEnd
