/*
Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

Unfortunately for you, your drive is very bumpy! Given a string showing either flat road ("_") or bumps ("n"), work out if you make it home safely. 15 bumps or under, return "Woohoo!", over 15 bumps return "Car Dead".

*/


function bump(x){
    let count = 0
    let arrBump = x.split("")
    for(let i = 0; i < arrBump.length; i++){
      if(arrBump[i] === 'n'){
        count += 1
      }
    }
  if(count > 15){
    return "Car Dead"
  }else{
    return "Woohoo!"
  }
}

//create count variable to store number of bumps
//split string into an array
//use a for loop to loop through the array
//use conditonal to check for bumps and add it to the count
//after loop create a conditional to check the car condition using number of bumps