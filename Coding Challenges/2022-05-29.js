//Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

//Example: (Input1, Input2 -->Output)
//"4",  "5" --> "9"
//"34", "5" --> "39"
//"", "" --> "0"
//"2", "" --> "2"
//"-5", "3" --> "-2"




function sumStr(a,b) {
    let aNum = Number(a)
    let bNum = Number(b)
   let sum = aNum + bNum
   return sum.toString()
     
 }

 //turn both inouts from a string to a number
 //add the inputs together
 //turn the sum into a string