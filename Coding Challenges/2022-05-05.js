//Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, 
//rearrange the digits to create the highest possible number.

//Example:
//Input: 42145 Output: 54421
//Input: 145263 Output: 654321
//Input: 123456789 Output: 987654321

function descendingOrder(n){
    let nChanged = n.toString().split("").sort((a,b) =>{return b-a;}).join("");
      return Number(nChanged)
  }

  //created variable nChanged
  //turned n into a string
  //split the string
  //used sort to change the order
  //used join to put the string back together
  // used Number to turn nChanged into a number
  //returned it