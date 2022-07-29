
//P: n is a positive integer n >= 1
//R: an array with integers from 1 to n
//E:
   //preFizz(6)
   //preFizz(1)
   //preFizz(4)
//P: 
  //create an empty array to store integers
  //use a for loop to iterate the numbers
  //add the iterator to the array after each loop
  //return the array

function preFizz(n) {
  let array = [];
  for(let i = 1; i <= n; i++){
    array.push(i);
  }
  return array;
  
}
