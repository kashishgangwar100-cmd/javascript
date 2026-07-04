const userEmail = "kashish.ai"

if(userEmail){
    console.log("Got user email");
}else{
    console.log("Dont have user email");
    
}

// false values 
// false , 0, -0(mostly interview), BigInt 0n,"", null , undefined , NaN
//except all these values are consider as truthy values. example : "0"(remember), 'false'(written inside the string), " ", [], {} , function(){}

// if(userEmail.length === 0){
// console.log("Array is Empty");

// }

// const emptyObj = {}
// if(Object.keys(emptyObj).length === 0){
//     console.log("Object is empty");
// }

// false == 0 returns true
//false == '' returns true
// 0 == ' '  returns true

//Nullish Coalescing Operator (??) : null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15

val1 = null ?? 10 ?? 20

console.log(val1);

//Terniary Operator
// condition ? true : false
const iceTeaPrice = 100 
iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80")