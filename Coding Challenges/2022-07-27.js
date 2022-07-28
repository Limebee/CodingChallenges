/*
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
*/





function solution(str){
  let i = 0;
  let result = [];
  let splitString = str.split("")
  if (str.length % 2 !== 0) {
    splitString.push("_");
  }
 for(i; i < str.length; i += 2){
 result.push(splitString[i] + "" + splitString[i + 1])
 }
  return result;
}

//create an an empty array to store new array
//split the string into an array
//use a conditional to check if the string has an odd length
//add underscore if it has an odd length
//use a for loop to create the new array with pairs
//use string concatenation to create the pairs and push them to the empty array
//return the new array with the pairs
