// console.log(Math.PI); 

Math.PI = 5; //try to overwrite the value

// console.log(Math.PI); //but cant chang ethe value because its hardcoded restricted by propertyofdiscriptor

let discriptor = Object.getOwnPropertyDescriptor(Math, 'PI');
// console.log(discriptor);

let obj = {
    name: "Nitish",
    email: "n@google.com",
    pass: 1234
}

console.log(Object.getOwnPropertyDescriptor(obj, "name"));

Object.defineProperty(obj, "name", {
    writable: false,
    enumerable: false
})

for (const key in obj) {
    console.log(`${key}: ${obj[key]}`)
}