/*
Complete the function that takes two numbers as input, num and nth and return the nth digit of num (counting from right to left).

Note

If num is negative, ignore its sign and treat it as a positive value
If nth is not positive, return -1
Keep in mind that 42 = 00042. This means that findDigit(42, 5) would return 0
Examples(num, nth --> output)

5673, 4 --> 5
129, 2 --> 2
-2825, 3 --> 8
-456, 4 --> 0
0, 20 --> 0
65, 0 --> -1
24, -8 --> -1

*/




let findDigit = function(num, nth){
    let digit = Math.abs(num).toString().split("");
    if(nth <= 0){
      return -1;
    }else if(digit.length < nth){
      return 0;
    }else{
      return Number(digit[digit.length - nth]);
    }
}


//get the absolute value of the number to get rid of negative numbers
//turn number into a string and split it
//create a conditonal
//return -1 for nth digits that are less than or equal 0
//return 0 for digits with  a length < nth
//in all other cases return the number by using its index
//subtract the length with nth to get the index
//convert the number from a string into a number and return it