/*
Now that the competition gets tough it will Sort out the men from the boys .

Men are the Even numbers and Boys are the odd

Given an array/list [] of n integers , Separate The even numbers from the odds , or Separate the men from the boys
Return an array/list where Even numbers come first then odds

Since , Men are stronger than Boys , Then Even numbers in ascending order While odds in descending .

Array/list size is at least 4 .

Array/list numbers could be a mixture of positives , negatives .

Have no fear , It is guaranteed that no Zeroes will exists . 

Repetition of numbers in the array/list could occur , So (duplications are not included when separating).


*/


function menFromBoys(arr){
    let odd = [];
    let even = [];
    for(let i = 0; i < arr.length; i++){
      if(arr[i] % 2 == 0){
        even.push(arr[i]);
      }else{
        odd.push(arr[i]);
      }
    }
    let evenSort = even.sort((a,b) => a - b);
    let oddSort = odd.sort((a,b) => b - a);
    let men = evenSort.filter((item, index) => evenSort.indexOf(item) === index);
    let boys = oddSort.filter((item, index) => oddSort.indexOf(item) === index);
    return men.concat(boys);
  }

  //create empty arrays for even and odd  numbers
  //use a for loop to iterate through the array to find even and odd numbers
  //add them to the arrays
  //sort even numbers into ascending order and odd into descending order
  //use filter to get rid of duplicates
  //combine the arrays using concat