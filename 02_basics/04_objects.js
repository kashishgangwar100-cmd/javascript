// const tinderUser = new Object() this is a singleton object
const tinderUser = {} //non singleton object

tinderUse.id = "123abc";
tinderUser.name = "kashish"
tinderUser.isLoggedIn = false


// console.log(tinderUser);

const regularUser ={
    email: "someone@gmail.com",
    fullname: {
        userfullname:{
            firstname : "kashish",
            lastname: "gangwar",
        }
    }
}
console.log(regularUser.fullname);
console.log(regularUser.fullname?.userfullname.firstname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign(obj1,obj2)//one way
// const obj3 = Object.assign({},obj1,obj2)//another way of representation .here {} acts as a target and values like obj1,obj2 ... all act as a source.more preffereable

const obj3 = {...obj1,...obj2}
console.log(obj3);

const users = [
    {
        id: 1,
        email: "k@gmail.com"

    },{
        id: 1,
        email: "k@gmail.com" 
    },
    {
        id: 1,
        email: "k@gmail.com" 
    }
]
users[1].email;
console.log(tinderUser);

console.log(Object.keys(tinderUser));//put all keys in array//important for database

console.log(Objects.values(tinderUser));
console.log(Object.entries(tinderUser));//less in use

console.log(tinderUser.hasOwnProperty('isLoggedIn'));


