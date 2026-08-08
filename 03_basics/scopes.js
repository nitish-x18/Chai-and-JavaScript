let a = 100;
// const b = 200;
//var c = 300;

if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);


function One(){
    const UserName = "Nitish";

    function Two(){
        const Website = "Youtube";
        console.log(UserName);
    }
    
    //console.log(Website); //give error becouse out of scope
    Two();
}

One();

if(true){
    const UserName = "Nitish";
    if(UserName === "Nitish"){
        const Website = " Google";
        console.log(UserName + Website);
    }
}

console.log(AddOne(5));

function AddOne(num){
    return num + 1;
}

const AddTwo = function(num){
    return num + 2;
}

console.log(AddTwo(5));