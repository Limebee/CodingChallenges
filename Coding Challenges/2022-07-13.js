/*
Several people are standing in a row divided into two teams.
The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

*/
//PREP

//P: array with the weights of people from teams 1 and 2

//R: create a new array with the total weight of team 1 and total weight of team 2

function rowWeights(array){
    let teamWeight = [];
    let team1Sum = 0;
    let team2Sum = 0;
    
    for(let i = 0; i < array.length; i++){
      if(i % 2 === 0){
        team1Sum += array[i];
      }else{
        team2Sum += array[i];
      }
    }
    teamWeight.push(team1Sum);
    teamWeight.push(team2Sum);
    return teamWeight;
  }

//E: 

rowWeights([100]);
rowWeights([145, 159, 195]);
rowWeights([134, 129, 179, 163, 181]);

//P:

//create teamWeight variable to store the array of the total of Team 1 and Team 2
//create variables to store the individual sums of Team 1 and Team 2
//create a for loop that will add each person's weight to the sum of their team
//a weight with an even index will be added to Team 1 and a weight with an odd index will be added to Team 2
//push each sum to teamWeight
//return teamWeignt 