// for of

["","",""]
[{}, {},{}]

 const arr= [1,2,3,4,5]
 
 for (const num of arr) 
    {
    // console.log(num);
}

const greetings = "hello world!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`)
}

//Maps give unique values and order will also be the same

const map = new Map()
map.set('IN', "India")
map.set('PAK', "Pakistan")

// console.log(map);

for (const [key,value] of map) {
    console.log(key, ':-',value);
}

const myObject = {
    'game1' : 'NFS',
    'game2' : 'spiderman'
}

// for (const [key,value] of myObject)this will not work {
//     console.log(key, ':-',value);
// }
