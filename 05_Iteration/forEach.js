let coding = ["js", "cpp", "py", "java"];

coding.forEach(function (val) {
    // console.log(val);
})

coding.forEach( (val) => {
    // console.log(val);
})

function PrintMe(item){
    console.log(item);
}

// coding.forEach(PrintMe);

coding.forEach((val, index, Array) => {
    // console.log(val, index, Array);
    console.log(`Val: ${val}, Index: ${index}, Array: ${Array}`);
})

let objinarr = [
    {
        language: "javascript",
        filename: "js"
    },
    {
        language: "c++",
        filename: "cpp"
    },
    {
        language: "python",
        filename: "py"
    }
]

objinarr.forEach( (item) => {
    console.log(item.language);
    console.log(item.filename);
})