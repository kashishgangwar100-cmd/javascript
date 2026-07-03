// let a = 10
// const b = 20
// var c = 30

// var c = 300//global scope 
 //  {} //scope if with function then it is termed as scope of that function
// let a = 300

 if(true)//block scope
    {
    let a = 10
    const b = 20
    // console.log("INNER: ",a);
    // var c = 30//var is avoided as here only we declared above that var c = 300 and here we declared that var c = 30 still at terminal output shown will be 30 and not 300.
}


// console.log(a);
// console.log(b);
// console.log(c);//30 should not be printed but here this get printed which is problem
// console.log(a);


function one(){
    const username = "kashish"

    function two()//this is child and it can access parent variable
    {
        const website = "instagram"
        // console.log(username);
    }
    // console.log(website);//cant access from here through error
    // two()//because of upper line this also not executed

    two()
}
one()

if(true){
    const username = "kashish"
    if(username == "kashish"){
        const website = " insta"
        // console.log(username + website);
    }
    // console.log(website);//this will through an error because it is outsite the scope its scope is above in if statement and in {}.
}
// console.log(username);//its scope is also not here

//+++++++++++++++ interestinsg +++++++++++++
console.log(addone(5))

function addone(num){
    return  num + 1
}


// addTwo(5);//throws an error but not in above case because at above only declaration happened but in the lower case we declare a variable also this concept is hoisting
const addTwo = function(num)//it is a function but aka known as expression.they are powerfull they can hold any value
{
    return num + 2
}

