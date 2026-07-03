//Immediately Invoked Function Expressions(IIFE)
//we dont want to pollute the function by the global scope so we create a complete independent scope + we want it to be executed immediately
//global scope me joh pollution hai ya job bhi declaration h usko remove karne ke liye iife use hota hai

(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`);
}) (); //first code should be ended in order to run the second code this can be done by the ;(semicolon).

( (name) => {
    //unnamed IIFE
    console.log(`DB CONNECTED TWO ${name}`);
})('kashish')








