/*
Due to another of his misbehaved, the primary school's teacher of the young Gauß, Herr J.G. Büttner, to keep the bored and unruly young schoolboy Karl Friedrich Gauss busy for a good long time, while he teaching arithmetic to his mates, assigned him the problem of adding up all the whole numbers from 1 through a given number n.

Your task is to help the young Carl Friedrich to solve this problem as quickly as you can; so, he can astonish his teacher and rescue his recreation interval.

Here's, an example:

f(n=100) // returns 5050 
It's your duty to verify that n is a valid positive integer number. If not, please, return false (None for Python, null for C#, 0 for COBOL).
*/



function f(n){  
    let sum = 0;
    if(n <= 0 || Number.isInteger(n) === false){
      return false;
    }else{
      for(let i = 0; i <= n; i++){
      sum += i;
    }
      return sum;
    }
  };


  //create a varible that will store the sum
  //create a conditionl to check if the input is valid
  //invalid inputs return false
  //for valid inputs create a for loop to iterate numbers between 1 and n
  //add each number to the sum
  //return the sum