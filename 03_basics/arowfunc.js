const User = {
    Name: "Nitish",
    Email: "nitish@google.com",
    age: 20,

    GreatMassage: function () {
        console.log(`${this.Name}, Welcome to this Website`);
        console.log(this);
    }
}

// User.GreatMassage();
// User.Name = "Hitesh";
// User.GreatMassage();

// console.log(this); //gives empty object

function Details() {
    let UserName = "Nitish";
    console.log(this.UserName);
}

//Details(); //gives undefined beacouse in this keyword


// Arrow Functions-->
const chai = () => {
    console.log("Chai Aur Code");
}

// chai();

// const AddTwoNum = (num1, num2) => num1 + num2;
const AddTwoNum = (num1, num2) => (num1 + num2);

// console.log(AddTwoNum(2,3));

const Obj = () => ({ UserName: "Nitish" });
// console.log(Obj());