/*
Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Example:

["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about that!

*/

function removeEveryOther(arr){
    return arr.filter((item, index) => index % 2 === 0);
  }

  //use filter use the index parameter
  //do index % 2 to represent even index
  //every second element in the array would have an even index
  //filter out elements with an even index