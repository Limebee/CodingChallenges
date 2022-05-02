//Simple, given a string of words, return the length of the shortest word(s).
//String will never be empty and you do not need to account for different data types.


function findShort(s){
    let wordArray = s.split(" ").map(word => word.length)
      return Math.min(...wordArray)
  }


  //split the input
  //used map to create a new array with  the length of each word
  //used Math.min to find the shortest word