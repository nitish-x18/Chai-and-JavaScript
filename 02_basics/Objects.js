const Sym = Symbol("Hello!!!")
// console.log(Sym);
// console.log(typeof Sym);

let ObjUser = {
    Name: "Nitish",
    "Full Name": "Nitish Yadav",
    [Sym]: "Symbol", //symbol passed in obj
    Age: 20,
    Email: "nitish@google.com",
    Location: "Chandighar",
    IsLoggedIn: false,
    Marks: [99,100,89,98,100]
}

// console.log(ObjUser);
// console.log(ObjUser.Name); //acess elements
// console.log(ObjUser["Full Name"]); //another way to acess elements in obj
// console.log(ObjUser["Email"]);

ObjUser.Email = "nitish@microsoft.com";

//Object.freeze(ObjUser); //freez the obj after that elements cant be changed

ObjUser.Email = "nitish@amazon.com";

// console.log(ObjUser.Email);

console.log(ObjUser);
console.log(ObjUser[Sym]); // we can pass symbol in obj using square bracket []

ObjUser.greeting = function(){
    console.log("Hello ObjUser...");
}

ObjUser.greeting2 = function(){
    console.log(`Hello ObjUser ${this["Full Name"]}`);
    console.log(`Your Age is ${this.Age}`);
}

ObjUser.greeting();
ObjUser.greeting2();
console.log(ObjUser);