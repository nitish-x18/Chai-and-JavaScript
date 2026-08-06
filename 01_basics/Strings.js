const name = "Nitish";
const repoCount = 18;

console.log(name + repoCount + " On the GitHub"); //old way to concatinate the strings

console.log(`My Name is ${name} and my Github repoCount is ${repoCount}`); //New and Effective method

let Str = new String("Nitish Yadav");
console.log(Str);

// console.log(Str.length);
// console.log(Str.toUpperCase())
// console.log(Str.toLowerCase())
// console.log(Str.trim());
// console.log(Str.charAt(4));
console.log(Str.indexOf('Y'));

console.log(Str.slice(-1));
console.log(Str.substring(0, 5));
console.log(Str.split(" "));

console.log(Str.replace(" ", "-"));

console.log(Str.includes("N"))

console.log(Str.split("").reverse().join("")); //reverse string