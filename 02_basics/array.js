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