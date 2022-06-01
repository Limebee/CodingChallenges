//Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.
//For example:
//a = 1
//b = 4
//--> [1, 2, 3, 4]

function between(a, b) {
    let numArray = []
    for(let i = a; i <= b; i++){
        numArray.push(i)
    }
    return numArray
  }

  //create an empty array to store the integers
  //use a for loop to iterate the numbers
  //push the numbers to the empty array
  //return the array