//Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

//Examples (Input -> Output):
//* "String"      -> "SSttrriinngg"
//* "Hello World" -> "HHeelllloo  WWoorrlldd"
//* "1234!_ "     -> "11223344!!__  "

function doubleChar(str) {
    return str.split("").map(item => item.concat(item)).join("")
  }

  //split the string
  //map is letter in string
  //add the same letter using concat
  //join the string back to together