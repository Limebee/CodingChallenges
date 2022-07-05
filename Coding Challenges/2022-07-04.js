/*
Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

Examples

remove("Hi!") === "Hi"
remove("Hi!!!") === "Hi!!"
remove("!Hi") === "!Hi"
remove("!Hi!") === "!Hi"
remove("Hi! Hi!") === "Hi! Hi"
remove("Hi") === "Hi"
*/


function remove (string) {
    let array = string.split("");
     if(array[array.length - 1] === "!"){
         array.pop();
         return array.join("");
     }else{
         return array.join("");
     }
   }

   //split string into an array
   //use a conditional to check if there is an ! at the end of the array
   //subtract 1 from the array length to get the last index
   //for ! at the end, use pop to remove it and join the array back into a string
   //otherwise just join the array into a string