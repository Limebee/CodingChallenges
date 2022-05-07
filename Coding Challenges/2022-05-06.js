//Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
//Example

/*
[true,  true,  true,  false,
true,  true,  true,  true ,
true,  false, true,  false,
true,  false, false, true ,
true,  true,  true,  true ,
false, false, true,  true]
*/




function countSheeps(arrayOfSheep) {
    let sheepCount = arrayOfSheep.filter(sheep => sheep === true)
       return sheepCount.length
   }


//created variable sheepCount
//set value to arrayofSheep filtered 
// created a new array with only true value
//used lenght the get the number of true
//returned it