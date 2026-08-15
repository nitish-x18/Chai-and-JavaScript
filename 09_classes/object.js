function CreateUser(userName, price) {
    this.userName = userName;
    this.price = price;
}

//creating own prototype functions
CreateUser.prototype.printMe = function () {
    console.log(`Price of ${this.userName} is: ${this.price}`);
}

CreateUser.prototype.increase = function () {
    this.price += 10;
}

let userOne = new CreateUser('chai', 20);
console.log(userOne);
let userTwo = new CreateUser('tea', 200);

userOne.increase();
userOne.printMe();

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/