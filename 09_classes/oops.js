const User = {
    UserName: "Nitish",
    Email: "Nitish@gmail.chai",
    IsLoggedIn: true,

    Getfunc: function () {
        console.log('Hello World');
        console.log(`Welcome, ${this.UserName}`);
    }
}

// console.log(User.UserName);
// console.log(User.Getfunc());

const Users = function (UserName, Email, IsLoggedIn) {
    this.UserName = UserName;
    this.Email = Email;
    this.IsLoggedIn = IsLoggedIn;

    this.greet = (() => {
        console.log(`Hello, ${this.UserName}`);
    })

    return this;
}

let userOne = new Users('Hitesh', 'abc@gmail.com', true);
let userTwo = new Users('IronMan', 'iron@gmail.com', false);
console.log(userOne);
console.log(userOne.greet());
console.log(userTwo);