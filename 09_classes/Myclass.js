// class user {
//     constructor(userName, email, password) {
//         this.userName = userName;
//         this.email = email;
//         this.password = password;
//     }

//     encryption() {
//         return `${this.password}abc`;
//     }

//     changeUsername() {
//         return `${this.userName.toUpperCase()}`;
//     }
// }

// const chai = new user("chai", "chai@gmail.com", 1234);
// console.log(chai.encryption());
// console.log(chai.changeUsername());

// behind the seen without class sytax--->

const user = function (userName, email, password) {
    this.userName = userName;
    this.email = email;
    this.password = password;
}

user.prototype.encryption = function(){
    return `${this.password}abc`;
}

user.prototype.changeUsername = function(){
    return `${this.userName.toUpperCase()}`;
}

const tea = new user("tea", "teaa@gmail.com", 9987);
console.log(tea.encryption());
console.log(tea.changeUsername());