//Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

//Example
//"This is an example!" ==> "sihT si na !elpmaxe"
//"double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
    let splitString = str.split(" ")
    return splitString.map(element => element.split("").reverse().join("")).join(" ")
  }

//create a variable that stores the string split in substring(s)
//use map method to split each substring and reverse it then join the word together
//then use join method to put the original string back together
