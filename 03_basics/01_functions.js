function sayMyName(){
console.log("I");
console.log("S");
console.log("H");
console.log("A");
}

// sayMyName()

// function addTwoNumbers(number1, number2)//number1, number2 parameters
// {
//    console.log(number1 + number2);
// }

// addTwoNumbers(3,4)
// addTwoNumbers(3,"4")
// addTwoNumbers(3,null)
// addTwoNumbers(3,"a") //3 and a are arguments

function addTwoNumbers(number1,number2){
    // let result = number1 + number2
    // return result
    // console.log("kashish");//this one never executed after return nothing works if we move it up then it will be printed

    return number1 + number2
}

const result = addTwoNumbers(3,5)//whenever we return then we need to store it in some variable here const is that variable only console log wont work.
// console.log("Result: ", result);//console print karne ka mtlb yeh nhi ki function woh value return bhi kar raha h console ka mtlb bas console dena hai.here return is undefined

function loginUserMessage(username = "kashish"){
    if(username === undefined){
    console.log("enter the name");
    return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("kashish");
console.log(loginUserMessage());



