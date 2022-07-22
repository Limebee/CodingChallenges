/*
Write a function that returns the total surface area and volume of a box as an array: [area, volume]
*/

function getSize(width, height, depth){
    let volume = width * height * depth;
    let area = 2 * ((width * depth) + (height * depth) + (width * height));
     return [area, volume];
  }

//store the equation for volume in a variable
//store the equation for the area
// create an array and put the area and the volume into it 
//return it