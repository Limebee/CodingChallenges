//Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
//If the input is an empty array or is null, return an empty array.
//Example
//For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

function countPositivesSumNegatives(input) {
    if (input == null || input.length < 1){
      return []
      }else{
        let numberPositive = input.filter(number => number > 0).length
        let numberNegative = input.filter(number => number < 0).reduce((sum,number) => sum + number, 0)
        let answer = new Array(numberPositive,numberNegative)
        return answer
      }
  }


  //conditional to confirm if the input is valid
  //if it is valid use filter to create two  arrays of the positive and negative numbers
  //use length to get the amount of positive numbers
  // used reduce to get the sum of neagtive numbers
  //created a new array with the count of posive numbers an sum of neagtive numbers