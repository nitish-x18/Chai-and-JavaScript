const arr = [1,2,3,4,5,6,7,8];

const Hero = ["IronMan", "SpiderMan", "Thor"];
const cars = new Array("Gwagon", "BMW", "Toyota");

// console.log(arr);
// console.log(arr[1]);
// console.log(arr.length);

let NewArr = [2,3,4,5];
NewArr.push(6);
NewArr.push(7); //insert element in the last
NewArr.pop(); //delete element from the last


NewArr.unshift(1); //insert element in the starting of array
NewArr.shift(); //remove element from the starting of array

//console.log(NewArr);

console.log(NewArr.includes(10));
console.log(NewArr.indexOf(2));

console.log(NewArr.join());  //covert into string

// Slice And Splice-->

let OldArr = [1,2,3,4,5];

console.log(OldArr.slice(1,4)); //gives elements between the range
console.log(OldArr);

console.log(OldArr.splice(1,4)); //remove the elemenets includes the range
console.log(OldArr);

let Marvel_Heros = ["IronMan", "SpiderMan", "Thor"];
let Dc_Heros = ["SuperMan", "BatMan", "FlyingJat"];

//Marvel_Heros.push(Dc_Heros);

// console.log(Marvel_Heros);
// console.log(Marvel_Heros[3][0]);

let All_Heros = Marvel_Heros.concat(Dc_Heros);
//console.log(All_Heros);

//console.log([...Marvel_Heros, ...Dc_Heros]); //Spred

console.log(Array.isArray("Nitish"));
console.log(Array.from("Nitish")) //convert into Array
console.log(Array.from({Name: "Nitish"})) //cant give the Array because its not classified that key or pair of array want user so its return empty array

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));

let Complex = [1,2,3,4,[2,3,4],3,4,3,[9,8,[6,3,5]]];
let Simple = Complex.flat(Infinity);
console.log(Simple);