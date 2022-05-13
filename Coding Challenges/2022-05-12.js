//Your task is to create a function that does four basic mathematical operations.
//The function should take three arguments - operation(string/char), value1(number), value2(number)
//The function should return result of numbers after applying the chosen operation.

//PREP
//P: operation, value1, value2
//R: result of the equation

function basicOp(operation, value1, value2){
    if(operation === "+"){
        return value1 + value2
    }else if(operation === "-"){
        return value1 - value2
    }else if(operation === "*"){
        return value1 * value2
    }else if(operation === "/"){
        return value1 / value2
    }
}



//E:
basicOp("+", 5, 8) // 13
basicOp("*", 3, 4) //12
basicOp("-", 10, 16) // -6

//used a condtional to check with operation to used