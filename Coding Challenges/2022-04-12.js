//#To square(root) or not to square(root)

//Write a method, that will get an integer array as parameter and will process every number from this array.
//Return a new array with processing every number of the input-array like this:

//If the number has an integer square root, take this, otherwise square the number.

// Ex :[4,3,9,7,2,1] -> [2,9,3,49,4,1]


//Write a function that takes in an array
function squareORSquareRoot (array) {
    return array.map(a => Math.sqrt(a) % 1 === 0 ? Math.sqrt(a): (a*a))
}

//map through the array check whether the item is a perfect square. 
//If it is take the square root else square the item.
//return new array

squareORSquareRoot([1,2,3,4])