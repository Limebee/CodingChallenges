//Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

//PREP

//P: str 

//R: new string with 1s and 0s

function fakeBin(x){
    let newStr = str.split("").map(number => number < 5 ? 0 : 1)
        return newStr.join("")
}

//split the string into an array
//used map to check each number
//used a conditonal within map to change the number 
//stored the new array in a variable
//used join to turn array into a string


//E:
fakeBin("57830210")
fakeBin("82361758")
fakeBin("92375612")