const name  = "kashish"
const repoCount = 50

console.log(name + repoCount + "Value"); //not recommended in modern world

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('kashishkg')
// console.log(gameName[0]);
// console.log(gameName.__proto__); //used in order to accessed object


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4) //last value 4 is not including in the making of substring
//in substring negative value cant be used,values get ignored and start with zero
console.log(newString); 

const anotherString = gameName.slice(0,4) //if negative value it will give reverse values
console.log(anotherString);

const newStringOne = "  kashish  "
console.log(newStringOne);
console.log(newStringOne.trim());//trim start and trim exist.trim works only on whitespace character and  line terminators.

const url = "https://kashish.com/kashish%20gang"

console.log(url.replace('%20','-'))

console.log(url.includes('sundar'))
console.log(gameName.split('-'));
