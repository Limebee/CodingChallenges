/*
In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

make as few changes as possible.
if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
*/

//PREP

//P: A string with mixed uppercase and lowercase letters

//R: return string with only uppercase or lowercase letters

//E:

//P:
//split the string into an array
//use a for loop to iterate through the array
//count the number of uppercase and lowercase numbers using a conditonal
//create a conditonal 
//if the number of uppercase is higher then the number of lowercase make the string uppercase
//make the string lowercase in other cases
function solve(string){
  let arr = string.split("");
  let upperCount = 0;
  let lowerCount = 0;
   for(let i = 0; i < arr.length; i++){
     if(arr[i] === arr[i].toUpperCase()){
        upperCount += 1;
     }else{
        lowerCount += 1;
     }
   }
   if(upperCount > lowerCount){
     return string.toUpperCase();
   }else{
    return string.toLowerCase();
   }
}