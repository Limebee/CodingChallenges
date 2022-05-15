//For this game of BINGO, you will receive a single array of 10 numbers from 1 to 26 as an input. Duplicate numbers within the array are possible.
//Each number corresponds to their alphabetical order letter (e.g. 1 = A. 2 = B, etc). Write a function where you will win the game if your numbers can spell "BINGO". 
//They do not need to be in the right order in the input array). Otherwise you will lose. Your outputs should be "WIN" or "LOSE" respectively.
//PREP

//P: a
//R: numbers that spell BINGO

function bingo(a) {
    if(a.includes(2) && a.includes(9) && a.includes(14) && a.includes(7) && a.includes(15)){
      return "WIN"
    }else{
      return "LOSE"
    }
  }

//E:
bingo([2,6,4,5,8,9,3])
bingo([4,6,7,2,9,8,5])
bingo([5,6,7,3,8,1,9])

//used a conditional to  check if the array can spell BINGO
//used the method include to check if the numbers needed were in the array