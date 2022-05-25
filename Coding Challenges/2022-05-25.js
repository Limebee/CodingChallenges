//In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. 
//For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.
//Write a function to calculate factorial for a given input. If input is below 0 or above 12 throw an exception of type ArgumentOutOfRangeException (C#) 
//or IllegalArgumentException (Java) or RangeException (PHP) or throw a RangeError (JavaScript) or ValueError (Python) or return -1 (C).

//P: n is a number

//R: return the calculation of the factorial


function factorial(n){
    let count = 1
    if(n < 0 || n > 12){
      throw new RangeError("The argument must be between 0 and 12.")
    }else{
      for(let i = 1; i <= n; i++){
        count *= i
      }
    }
    return count
  }

//E:
factorial(5)
factorial(3)
factorial(4)


//P:
//create variable  to store the result
//create a conditonal to check if the input is valid
// throws a range error for invalid inputs
// for valid inputs a for loop is used to iterate numbers
// each number is multiplied to the count
//return the count