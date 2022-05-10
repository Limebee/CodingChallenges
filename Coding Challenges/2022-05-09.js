//Finish the solution so that it sorts the passed in array of numbers. 
//If the function passes in an empty array or null/nil value then it should return an empty array.
//example
//solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
//solution(null); // should return []


function solution(nums){
    if (nums === null){
      return []
    }else{
      return nums.sort((a,b) => {return a-b})
    }
  }


  //used conditional to allow the function to return an empty array if the input is null
  //used sort for valid inputs