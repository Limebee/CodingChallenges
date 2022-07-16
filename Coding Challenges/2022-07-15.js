/*
Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
*/

function spinWords(string){
    let arr = string.split(" ");
    let splitArr = arr.map((word) => word.length >= 5 ? word.split("").reverse().join("") : word);
      return splitArr.join(" ");
  
  }

  //split string into an array
  //use map to reverse words that have a length of at least five
  //join the array back into a string
