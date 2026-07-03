const user = {
    username: "kashish",
    price : 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to the website`);//this reffers to the current context 
        console.log(this);
    }


}

// user.welcomeMessage()
// user.username = "kash"
// user.welcomeMessage()


console.log(this);//return empty{} because there is no global context

//+++++in browser when engine runs then there the most global object is window object.which is why we can capture all the window events

// function chai(){
//     let username = "kashish"
//     console.log(this.username);
// }

// chai()

// const chai = function(){
//     let username = "kashish"
//     console.log(this.username);
// }

// chai()

// const chai = () => {
//     let username = "kashish"
//     console.log(this);
// }

// chai()

// const addTwo = (num1,num2) => { basic arrow function 
//     return num1 + num2
// }

// const addTwo = (num1,num2) => num1 + num2 //implicit arrow function

// const addTwo = (num1, num2) => (num1 + num2)

// const addTwo = (num1,num2) => {username : "kashish"} //this is not a way to return object

const addTwo = (num1 , num2) => ({username: "kashish"})


console.log(addTwo(3,4))

// const myArray = [2,5,3,7,8]

// myArray.forEach()

