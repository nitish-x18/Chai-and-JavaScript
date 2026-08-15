function CreateUser(userName, price){
    this.userName = userName;
    this.price = price;
}

//creating own prototype functions
CreateUser.prototype.printMe = function(){
    console.log(`Price of ${this.userName} is: ${this.price}`);
}

CreateUser.prototype.increase = function(){
    this.price += 10;
}

let userOne = new CreateUser('chai', 20);
console.log(userOne);
let userTwo = new CreateUser('tea', 200);

userOne.increase();
userOne.printMe();