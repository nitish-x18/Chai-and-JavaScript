let hero = ["IronMan", "SpiderMan", "Thor"];

const user = {
    username: "Nitish",
    email: 'chi@gmail.com',
    isloogedin: true
}

Object.prototype.printUserName = function(){
    // console.log(this.username);
    console.log('Hiii form prototype');
}

// user.printUserName();
// hero.printUserName();

let str = "hitesh   ";

// console.log(str.length);

//create own function for give true length--->
String.prototype.truelength = function(){
    console.log(`True Length is: ${this.trim().length}`);
}

str.truelength();