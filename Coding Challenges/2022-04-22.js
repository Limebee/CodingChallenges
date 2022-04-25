//Code as fast as you can! You need to double the integer and return it.
function doubleInteger(i) {
    i = (i*2)
    return i;
  }
//Created a function with i as the parameter
//multiplied the variable by 2 and returned it



//We need a function that can transform a string into a number. What ways of achieving this do you know?

//Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

//Example
//"1234" --> 1234
//"605"  --> 605
//"1405" --> 1405
//"-7" --> -7

let stringToNumber = function(str){
    return parseInt(str);
  }

// created variable and set value to a function
//used the parseInt method to convert string to an integer
//returned the new value