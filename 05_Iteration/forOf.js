// Forof loop-->

let MyArray = [1,2,3,4,5];

for (const element of MyArray) {
    //console.log(element);
}

let Heros = ["IronMan", "SpiderMan", "Thor"];

for (const Hero of Heros) {
    console.log(Hero);
}

// MAP(Stores unique values in the form of pairs, no duplicates allowed)-->

let MyMap = new Map();
MyMap.set("num1", 10);
MyMap.set("num2", 20);
MyMap.set("num3", 30);

// console.log(MyMap);

for (const element of MyMap) {
    // console.log(element);
}

let NewMap = new Map();
NewMap.set("1", "IronMan");
NewMap.set("2", "SpiderMan");
NewMap.set("3", "Thor");

for (const [key, values] of NewMap) {
    // console.log(`${key} => ${values}`)
}

let Myobj = {
    name: "nitish",
    age: 20
}

for (const [key, values] of Myobj) {
    //console.log(key , values) //Gives error because object is not iterable
}