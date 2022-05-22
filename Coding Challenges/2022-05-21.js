//Write a function that checks if a given string (case insensitive) is a palindrome.

//PREP

//P: x

//R: return true or fale if string is a palidrome


function isPalindrome(x) {
    let stringLowercase = x.toLowerCase()
    if(stringLowercase === stringLowercase.split("").reverse().join("")){
      return true
    }else{
      return false
    }
  }

  //E:
  isPalindrome("hello")
  isPalindrome("Noon")
  isPalindrome("Racecar")

  //P:
  //make the input lowercase
  //create a conditional
  //check if the string and reverse are the same
  //return true if they are the same
  //return false if they aren't