//Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

//PREP

//P: number

//R: return a string 



let countSheep = function (num){
    let i = 1 
    let text = ""
    for(i; i <= num; i++){
      text +=`${i} sheep...`
    }
    return text
  }

  //E:
  countSheep(3)
  countSheep(5)
  countSheep(2)

//P:
  //set variable i to zero
  //set variable text with value of an empty string
  //use a for loop to iterate the string 
  //add each iteration to the text variable
  //return text