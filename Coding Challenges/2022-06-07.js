/*
My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!

In honor of my grandfather's memory we will write a function using his formula!

Take a list of ages when each of your great-grandparent died.
Multiply each number by itself.
Add them all together.
Take the square root of the result.
Divide by two.
*/


function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
    let ages = [age1,age2,age3,age4,age5,age6,age7,age8]
    let sum = ages.map(num =>  num * num).reduce((curr, total) => total + curr, 0)
      return Math.floor(Math.sqrt(sum) / 2)
   }

   //store ages in an array
   //use map to mutiply each age by itself
   //use reduce to find the sum of the ages
   //take the square root and divide it by two
   //use Math.floor to round the number
