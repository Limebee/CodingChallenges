//All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. 
//Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.
//Assume that beast and dish are always lowercase strings, and that each has at least two letters.

function feast(beast, dish) { 
    if( beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]){
      return true
    }else{
      return false
    }
     
   }


//created a fuction with beast and dish as parameters
//made a conditional
//first statement is to confirm that the beast and dish start with the same letter
//used index 0 to locate the first letter
//second statement used .length - 1 to locate the last letter in each name
//second statement check if the beast and dish end in the same letters
//if both statements are true then return true
