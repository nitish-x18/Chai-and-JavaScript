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


function CalculateCartPrice(val1, val2, ...items){ //(...) rest function that takes all the arguments
    return items;
}

// console.log(CalculateCartPrice(20,39,405,30,28));
// console.log(CalculateCartPrice(10,20,30,40,50));

let Obj = {
    UserName: "Nitish",
    price: 10000
}


//Pass Object In function-->
function MyObj(anyobject){
    console.log(`${anyobject.UserName} is User and price is ${anyobject.price}`);
}

// MyObj(Obj);
// MyObj(UserDetail = {
//     UserName: "Hitesh",
//     price: 1
// })

//Pass Array in function-->

let Arr = [10,20,30,40,50];

function SecondValueofArr(anyarray){
    console.log(anyarray[1]);
}

// SecondValueofArr(Arr);
// SecondValueofArr([90,80,70,60,50]);