//A Narcissistic Number is a number of length l in which the sum of its digits to the power of l is equal to the original number. If this seems confusing, refer to the example below.
//Ex: 153, where l = 3 ( the number of digits in 153 )
//1**3 + 5**3 + 3**3 = 153
//Write a function that, given n, returns whether or not n is a Narcissistic Number.





function isNarcissistic(n) {
    let numArray = n.toString().split("")
    let numPow = numArray.map(num => num ** numArray.length)
    let numSum = numPow.reduce((current, total) => current + total , 0)
      if(Number(numSum) === n){
        return true
      }else{
        return false
      }
  }

  //turn number into string ans split it
  //use map to return the power of the digit by length of n
  //use reduce to add all the number together
  //use a conditional to check if the sum of the numbers equal tp the original nuber