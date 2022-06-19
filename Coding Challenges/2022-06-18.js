/*
Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
*/



function multipleOfIndex(array) {
    let multiple = []
    for( let i = 0; i < array.length; i++){
      if(array[i] % i === 0){
        multiple.push(array[i])
      }
    }
    return multiple
  }

  //create an empty array and store it in a variable
  //use a for loop to iterate through the pnut array
  //if the array item modulus the index equals 0 add to empty array
  // use push to add item to the new array
  // return new array
  