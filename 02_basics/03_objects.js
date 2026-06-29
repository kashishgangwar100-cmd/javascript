//singleton
// Object.create
//object literals 

const mySym = Symbol("key1")//ask in interview that take a symbol and use it as a key and add on object and print it

const JsUser = {
    name: "kashish",
    "full name": "kashish gangwar" ,//cant be accessed using .(dot)
    // age: 18,
    // mySym: "myKey1", not a correct syntax
    [mySym]: "myKey1", //correct syntax for symbol
    location: "lucknow",
    email: "kashish@google.com",
    isLoggedIn: false,
    lastLoginDays:  ["Monday","Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser.mySym) //not using as a symbol
// console.log(typeof JsUser.mySym) 
// console.log(JsUser[mySym])

JsUser.email = "kashish@chatgpt.com"
Object.freeze(JsUser) //changes dont propogate if we use this 
JsUser.email = "kashish@tcs.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user,${this.name}`)
}
console.log(JsUser.greeting());
console.log(JsUser.greeting);//function return back
console.log(JsUser.greetingTwo());

