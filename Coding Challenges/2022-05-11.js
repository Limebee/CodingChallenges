//Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

function isTriangle(a,b,c){
    if ((a+b > c && c+b > a ) && c+a > b){
      return true
    }else{
      return false
    }
 }


 //did an if else statement
 //check to see if the sum of two of the integers would be less than the third integer
 //check differnt combinations
 // return true if all combinations deliver the right result
 //else return false