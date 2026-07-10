const myObject ={
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
//   console.log(myObject[key]);
console.log(`${key} shortcut is for ${myObject[key]}`);
    
}

const programming = ["js", "rb", "py", "java","cpp"]

for(const key in programming){
    console.log(programming[key]);
}

const map = new Map()
map.set('IN', "India")
map.set('PAK', "Pakistan")

for(const key in map)//if something is not iteratable you cant write that in a loop like this 
    {
    console.log(key);
}