//It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the 
//original string. You don't have to worry with strings with less than two characters.

function removeChar(str){
    let removeStr = str.split("")
     removeStr.shift()
     removeStr.pop()
     return removeStr.join("")
   };

//split the string apart
//used unshift to remove the first letter
//used pop to remove the last letter
//used join to combine the string an returned it