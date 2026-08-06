const MyDate = new Date();
// console.log(MyDate);

// console.log(MyDate.toString());
// console.log(MyDate.toTimeString());
// console.log(MyDate.toISOString());
// console.log(MyDate.toLocaleDateString());
// console.log(MyDate.toUTCString());
// console.log(MyDate.toDateString());

// let PrevDate = new Date('2023-01-28');
// let PrevDate = new Date(2026, 10, 19);
let PrevDate = new Date(2026, 10, 19 ,22 ,22);
console.log(PrevDate.toLocaleString());

let CreatDate = Date.now();
console.log(CreatDate);

console.log(Math.floor(Date.now() / 1000));

console.log(PrevDate.getTime());
console.log(PrevDate.getDay());
console.log(PrevDate.getMonth());

// `${newDate.getDay()} and the time `