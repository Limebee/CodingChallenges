/*
Time to test your basic knowledge in functions! Return the odds from a list:

[1, 2, 3, 4, 5]  -->  [1, 3, 5]
[2, 4, 6]        -->  []

*/





function odds(values){
    return values.filter(num => num % 2 !== 0 );
  }

//use filter method to create a new array
//modulus number by 2 
// if it doesn't equal zero add it to the new array
