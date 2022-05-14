//Can you find the needle in the haystack?

//Write a function findNeedle() that takes an array full of junk but containing one "needle"

//After your function finds the needle it should return a message (as a string) that says:


//PREP
//P: haystack
//R: index of needle

function findNeedle(haystack) {
    let needle = haystack.indexOf("needle")
    return `found the needle at position ${needle}`
  }

//E:
let haystack_1 = ["dog", "cat","needle" ,"hay", "rat"]
let haystack_2 = ["needle", "fur", "child", "leaf" ]
let haystack_3 = ["junk", "string", "dirt", "needle", "corn"]
findNeedle(haystack_1)
findNeedle(haystack_2 )
findNeedle(haystack_3)

//used indexOf to find the index of needle
//stored the index in variable needle
//returned template literal with the index of needle