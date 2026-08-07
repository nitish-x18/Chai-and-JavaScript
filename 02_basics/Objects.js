const Sym = Symbol("Hello!!!")
// console.log(Sym);
// console.log(typeof Sym);


//Object Litrels-->
let ObjUser = {
    Name: "Nitish",
    "Full Name": "Nitish Yadav",
    [Sym]: "Symbol", //symbol passed in obj
    Age: 20,
    Email: "nitish@google.com",
    Location: "Chandighar",
    IsLoggedIn: false,
    Marks: [99, 100, 89, 98, 100]
}

// console.log(ObjUser);
// console.log(ObjUser.Name); //acess elements
// console.log(ObjUser["Full Name"]); //another way to acess elements in obj
// console.log(ObjUser["Email"]);

ObjUser.Email = "nitish@microsoft.com";

//Object.freeze(ObjUser); //freez the obj after that elements cant be changed

ObjUser.Email = "nitish@amazon.com";

// console.log(ObjUser.Email);

//console.log(ObjUser);
//console.log(ObjUser[Sym]); // we can pass symbol in obj using square bracket []

ObjUser.greeting = function () {
    console.log("Hello ObjUser...");
}

ObjUser.greeting2 = function () {
    console.log(`Hello ObjUser ${this["Full Name"]}`);
    console.log(`Your Age is ${this.Age}`);
}

//ObjUser.greeting();
//ObjUser.greeting2();
//console.log(ObjUser);

//Properties of Objects--->>>

const UberUser = new Object(); //declaration of obj

UberUser.Name = "Nitish";
UberUser.Email = "nitish@uber.com";
UberUser.Age = 20;

//console.log(UberUser);

let NewUser = {}; //also declaration of obj
//console.log(NewUser)

NewUser = {
    Id: "Nit18",
    Email: "nitish@newuser.com",
    UserName: {
        firstName: {
            Fname: "Nitish",
            Lname: "Yadav"
        }
    }
}

// console.log(NewUser);
// console.log(NewUser.UserName);
// console.log(NewUser.UserName.firstName.Fname);

let obj1 = { a: 1, b: 2 };
let obj2 = { c: 1, d: 2 };
let obj3 = { e: 1, f: 2 };

// let obj4 = {obj1, obj2, obj3};
// let obj4 = Object.assign({}, obj1, obj2, obj3);

let obj4 = { ...obj1, ...obj2, ...obj3 };

//console.log(obj4);

let ArrObj = [
    {
        abc: 1,
        email: "l@.com"
    },
    { b: 2 },
    { c: 3 },
    { d: 4 }
]

// console.log(ArrObj);
// console.log(ArrObj[0].email);

// console.log(Object.keys(ObjUser));
// console.log(Object.values(ObjUser));

// console.log(ObjUser.hasOwnProperty("IsLoggedIn"));

//console.log(Object.entries(ObjUser));

let FirstElement = Object.entries(ObjUser)[0];
//console.log(FirstElement);


// De-Structure of Objects and into of Json--->

let Obj = {
    name: "Nitish",
    course: "Chai aur JavaScript",
    price: 1
}

console.log(Obj.name);

let {course} = Obj; //avoid obj.course name give the sort name direct acces course 
let {course : cName} = Obj; // give the sort name for key
console.log(course); //us de-structure for call value
console.log(cName); //callinf key using short name 


//Json formats-->

// {
//     "name": "nitish",
//     "email": "nitish@gmail.com",
//     "age": 20,
//     "isloggedin": true
// }

// [
//     {}
// ]