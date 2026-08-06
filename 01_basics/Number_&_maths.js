const Score = 100;
console.log(Score);

let Balance = new Number(10000);
console.log(Balance);

console.log(Balance.toString().length);

console.log(Balance.toLocaleString('en-IN')); //by default its convert into usa based

let Num = 123.8262
console.log(Num.toPrecision(4))
console.log(Num.toFixed(2))

// ***************************** MATHS ********************************

console.log(Math);

console.log(Math.abs(-2));
console.log(Math.round(4.32213));
console.log(Math.ceil(4.32213));
console.log(Math.floor(4.92213));
console.log(Math.pow(2,3));
console.log(Math.max(2,5,7,8,9,5,3));
console.log(Math.min(2,5,7,8,9,5,3));

console.log(Math.random());
console.log((Math.random() * 10) + 1);
console.log(Math.ceil((Math.random() * 10) + 1));

let max = 920;
let min = 910;

console.log(Math.ceil(Math.random() * (max - min + 1) + min));