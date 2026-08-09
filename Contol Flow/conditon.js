// if, if-else, if-else if --->>>

//conditions-->
// ==, ===, <, >, <=, >=, !, !=, !==

let Marks = 79;

// if(Marks >= 95){
//     console.log("Topper");
// }

// if (Marks >= 95) {
//     console.log("Topper");
// } else {
//     console.log("Need More Study");
// }

// if (Marks >= 95) {
//     console.log("Topper");
// } else if (Marks >= 90) {
//     console.log("Need More Study");
// } else if (Marks >= 80) {
//     console.log("Need Improvment");
// } else {
//     console.log("Fail!!!");
// }

let IsLoggedIn = true;
let LoggedFromFB = false;
let LoggedFromGoogle = false;
let IsMale = true;

// if (IsLoggedIn && IsMale) {
//     console.log("Welcome Sir")
// } else {
//     console.log("Welcome mam");
// }

if (IsLoggedIn || LoggedFromFB || LoggedFromGoogle) {
    console.log("Hello User!!!");
} else {
    console.log("Please login first");
}

// if (!IsMale) console.log("you are female"); //inline if
// if (IsLoggedIn && IsMale) console.log("You are loggedin"), console.log("Hello sir");