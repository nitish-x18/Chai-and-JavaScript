// For Loop --->

for (let i = 0; i <= 5; i++) {
    const element = i;
    //console.log(i);
}

let MyArray = [1,2,3,4];
for (let index = 0; index < MyArray.length; index++) {
    const element = MyArray[index];
    //console.log(element);
}

let Heros = ["IronMan", "SpiderMan", "Thor"];

for (let i = 0; i < Heros.length; i++) {
    // console.log(Heros[i]);
}

for (let i = 1; i <= 5; i++){
    console.log(`outer loop: ${i}`);
    for(let j = 1; j <= 5; j++){
        // console.log(`inner loop: ${j} and outer loop: ${i}`);
    }
}

// Break Statment-->

for (let i = 1; i <= 5; i++){
    if(i == 3){
        console.log("3 Detected");
        break;
    }
    console.log(i);
}

// Continue Statment-->

for (let i = 1; i <= 5; i++){
    if(i == 3){
        console.log("3 Detected");
        continue;
    }
    console.log(i);
}