//Build a function that returns an array of integers from n to 1 where n>0.
//Example : n=5 --> [5,4,3,2,1]


const reverseSeq = n => {
   let num = []
   for(let i = 0; i <= n; i++){
     num.push(i)
   }
   return num.reverse()
 };

 //created an empty array
 //did a for loop that runs until is greater than or equal to n
 // used push to add i to the empty array after every loop
 //returned the array and reversed it