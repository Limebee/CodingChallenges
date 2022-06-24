/*
Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

Examples

n = 0  ==> [1]        # [2^0]
n = 1  ==> [1, 2]     # [2^0, 2^1]
n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

*/


function powersOfTwo(n){
    let power = []
     for(let i = 0; i <= n; i++){
       power.push(Math.pow(2, i))
     }
     return power
   }


   //create an empty array
   //use a for loop to iterate the exponets
   //push the powers of 2 to the empty array
   //return the array