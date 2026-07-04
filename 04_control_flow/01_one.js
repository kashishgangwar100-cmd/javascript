//if 
// const temperature = 41

// if(temperature === 41){
//  console.log("less than 50");
// }else{
// console.log("temperature is greater than 50");
// }

// console.log("executed"); //always get executed

// < , > , <= , >= , ==(comparison), =(assignment), != , === (this checks type also), !==

// const score = 200

// if(score > 100){
//     const power = "fly" // in var scope problem is there so mostly we use others such as const let etc
//     console.log(`User power : ${power}`);
// }

// console.log(`User power : ${power}`);

const balance = 1000

// if(balance > 500) console.log("test"),console.log("test2") bad practice one should not write code like this

if(balance < 500){
  console.log("less than 500");
}else if(balance < 750){
    console.log("less than 750");

}else if(balance < 900){
    console.log("less than 750 ");
}else{
    console.log("less than 1200");
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard && 2==2){
    console.log("allow to buy course");
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in");
    
}




