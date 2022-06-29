/*
You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
*/


function likes(names) {
    if(names.length === 0){
      return 'no one likes this'
    }else if(names.length === 1){
      return `${names[0]} likes this`
    }else if(names.length === 2){
      return `${names[0]} and ${names[1]} like this`
    }else if(names.length === 3){
      return `${names[0]}, ${names[1]} and ${names[2]} like this`
    }else{
      return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
    }
  }

  //use a conditional
  //for empty arrays return 'no one likes this'
  //for arrays with a length greater than zero use a template literal to display the naames in the string
  //for arrays with a lenghth greater than 3 subtract 2 from the length to show the number for  others like this