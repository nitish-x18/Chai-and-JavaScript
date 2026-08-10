let Myobj = {
    js: "JavaScript",
    py: "Python",
    cpp: "C++",
}

for (const key in Myobj) {
    // console.log(`${key} is a shortcut of ${Myobj[key]}`);
}

let Myarr = ["a", "b", "c", "d"];

for (const key in Myarr) {
    console.log(Myarr[key]);
}