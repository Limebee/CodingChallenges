/*
Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.
*/

//P: an array

//R: return the sum of odd numbers in the array after all numbers in the array are cubed

//E: 
cubeOdd([1,2,3,4,5,6,7,8])
cubeOdd([41,57,73,19,57,32])
cubeOdd([58,40,15,'y',35,96])

//P:
//create a conditional
//check it all elements are a number
//if not all element are a number return undefuned
//else use map to cube each of the numbers
//use filter to create a new array with the odd numbers
//use reduce to find thsum of all of the odd numbers
//return the sum

function cubeOdd(arr) {
    let notNumber = arr.filter(element => isNaN(element) === true)
    if(notNumber.length > 0){
        return undefined;
      }else{
        let arrCubed = arr.map(element => element**3).filter(element => element % 2 !== 0);
        return arrCubed.reduce((curr, total) => curr + total ,0);
      }
  
    }