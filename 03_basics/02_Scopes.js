// let a = 10
// const b = 20
// var c = 30

// var c = 300//global scope 
 //  {} //scope if with function then it is termed as scope of that function
let a = 300

 if(true)//block scope
    {
    let a = 10
    const b = 20
    console.log("INNER: ",a);
    // var c = 30//var is avoided as here only we declared above that var c = 300 and here we declared that var c = 30 still at terminal output shown will be 30 and not 300.
}


// console.log(a);
// console.log(b);
// console.log(c);//30 should not be printed but here this get printed which is problem
console.log(a);



