let Coding = ["js", "py", "cpp", "java"];

let CodingLanguage = Coding.forEach((item) => {
    return item;
})

// console.log(CodingLanguage); //gives undefine because foreach not return values

let MyArray = [1, 2, 3, 4, 5, 6, 7, 8];

// let MyNum = MyArray.filter( (num) => {
//     return num > 4;
// });

// let MyNum = MyArray.filter( (num) => num > 4);

// console.log(MyNum);

MyArray.forEach((num) => {
    if (num > 4) {
        // console.log(num);
    }
});

let NewArray = []
MyArray.forEach((num) => {
    if (num > 4) {
        NewArray.push(num);
    }
})

// console.log(NewArray);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

// let UserBook = books.filter( (bk) => bk.genre === "History");

let UserBook = books.filter( (bk) => {
    return bk.genre === "History" && bk.edition >= 2000;
})

// console.log(UserBook);