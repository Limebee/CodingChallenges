//In this kata, the toFreud() function will take a string as its argument, 
//and return a string with every word replaced by the explanation to everything, according to Freud. 
//Note that an empty string, or no arguments, should result in the ouput being ""(empty string).

function toFreud(string) {
    if (string === ""){
      return ""
    }else{
      return string.replace(/[\w']+/g, "sex")
    }
    
  }
//create conditional
  //if the string is empthy return an empty string
  //else use replace method on the string
  //use regular expression to search for any word including ones with an apostrophe