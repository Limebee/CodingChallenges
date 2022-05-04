//Write a function that returns a string in which firstname is swapped with last name.
//Example
//nameShuffler('john McClane'); => "McClane john"

function nameShuffler(str){
    return str.split(" ").reverse().join(" ")
  }

  //used split to make the first and last name seperate strings
  //reversed each of them
  //used join to combine the first and last name together