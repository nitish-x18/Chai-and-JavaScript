// Premitive Data Types-->
// 7 --> Number, String, Bigint, Boolean, Null, Undefined, Symbol

const Score = 100; //Number
let Name = "Nitish" //String
let BigNumber = 1889788713442n //Bigint
let Isloggedin = true //Boolean
let Empty; //Undefined
let Temprature = null //Object

console.log(typeof(Score));
console.log(typeof(Name));
console.log(typeof(BigNumber));
console.log(typeof(Isloggedin));
console.log(typeof(Empty));
console.log(typeof(Temprature));

let Sym = Symbol('123')
let Sym1 = Symbol('123')

console.log(Sym === Sym1);

console.log(typeof(Sym));

// Non-Premitive Data Types-->
// array, object, Function

let Hero = ["IronMan", "SpiderMan", "Thor"]; //Object

let MyObj = {
    Name: "Peter Parker",
    Id: 18
} //Object

function myfunc(){
    console.log("Hello World!!!");
} //function

myfunc(); //call function 

console.log(typeof(Hero));
console.log(typeof(MyObj));
console.log(typeof(myfunc));