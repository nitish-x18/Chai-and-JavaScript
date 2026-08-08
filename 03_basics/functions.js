function MyFunc(){
    console.log("Inside my function")
}

// MyFunc();

function AddTwoNumber(num1, num2){ //Parameters
    return num1 + num2;
}

// console.log(AddTwoNumber(2,2)); //Arguments
let Sum = AddTwoNumber(2,2);
//console.log(Sum);

function UserDetail(UserName){
    if(UserName === undefined){
        console.log("Please enter User Name!!!");
        return
    }
    console.log(`${UserName} just loggedIn`);
}

// UserDetail();