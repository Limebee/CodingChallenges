//An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

//Note: anagrams are case insensitive

//Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

//Examples

//"foefet" is an anagram of "toffee"

//"Buckethead" is an anagram of "DeathCubeK"



//p: test, original are strings

//R: true or false if both strings are anagrams


 function isAnagram(test, original) {
    let originalArray = original.toLowerCase().split("").sort().join("")
    let testArray = test.toLowerCase().split("").sort().join("")
        if(originalArray === testArray){
            return true
        }else{
            return false
}
};


//E:
isAnagram("foefet", "toffee")
isAnagram("apple", "pale",)
isAnagram("Twoo", "WooT")


//P:
//make the strings lowercase
//split them and sort in 
//
//