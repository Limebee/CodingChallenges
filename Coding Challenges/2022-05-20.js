//Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.
//Numerical Score	Letter Grade
//90 <= score <= 100 'A'
//80 <= score < 90	'B'
//70 <= score < 80	'C'
//60 <= score < 70	'D'
//0 <= score < 60	'F'


//PREP


//P: three grades s1, s2, s3

//R: return a letter grade based on the average


function getGrade (s1, s2, s3) {
    let finalGrade = (s1 + s2 + s3) / 3
    if (finalGrade >= 90){
      return "A"
    }else if(finalGrade >= 80){
      return "B"
    }else if(finalGrade >=70){
      return "C"
    }else if(finalGrade >= 60){
      return "D"
    }else{
      return "F"
    }
  }

  //E:
  getGrade(90, 94, 82)
  getGrade(80, 72, 81)
  getGrade(60, 84, 73)

  //P:
  //stored the average of the three parameters in the variable final grade
  //created a conditonal that returns a letter grade based on the average
  