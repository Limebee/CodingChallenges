//Return an array containing the numbers from 1 to N, where N is the parametered value.

//Replace certain values however if any of the following conditions are met:

//If the value is a multiple of 3: use the value "Fizz" instead
//If the value is a multiple of 5: use the value "Buzz" instead
//If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
//N will never be less than 1.

//PREP
//P: number of items inarray

//R: return an array with differnt values

function fizzbuzz(n){
    let result = []
    for(let i = 1; i <= n; i++){
      if(i % 3 === 0 && i % 5 === 0){
        result.push("FizzBuzz")
      }else if( i % 3 === 0){
        result.push("Fizz")
      }else if( i % 5 === 0){
        result.push("Buzz")
      }else{
        result.push(i)
      }
    }
    return result
  }

  //E:
  fizzbuzz(3)
  fizzbuzz(7)
  fizzbuzz(5)

  //P: 
  // create a variable that stores an empty array
  //use a for loop to iterate the values that will be put in the array
  //use a conditional to confirm which value will be added to the array
  // use push to add the values to the array
  //return the array