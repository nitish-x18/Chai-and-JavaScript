const PromiseOne = new Promise(function (resolve, reject) {
    //Do async task 
    //DB tasks, Cryptography, Network tasks

    setTimeout(() => {
        console.log('Async task is complete');
        resolve();
    }, 1000)
})

PromiseOne.then(() => {
    console.log('Promise Consumed');
})

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Async Task 2 completed');
        resolve();
    }, 2000);
}).then(() => {
    console.log('Async task 2 resolved');
})

const PromiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ userName: "Nitish", email: "Chai@gmail.com" })
    }, 1000)
})

PromiseThree.then((user) => {
    console.log(user);
})

const PromiseFour = new Promise((resolve, reject) => {
    let error = true;
    if (!error) {
        resolve({ userName: "Nitish", Pass: 123 });
    } else {
        reject('ERROR: Something Went Wrong');
    }
})

PromiseFour.then((user) => {
    console.log(user);
    return user.userName;
}).then((userName) => {
    console.log(userName);
}).catch((error) => {
    console.log(error)
}).finally(() => {
    console.log('Resolve or Reject Something can happen');
})


const PromiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
        if (!error) {
            resolve({ userName: "JavaScript", Pass: 1234 });
        } else {
            reject('ERROR: 404')
        }
    }, 1000)
})

async function consumePromiseFive() {
    try {
        let response = await PromiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive();

// let AllUsers = async function () {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log("ERROR: ", error);
//     }
// }

// AllUsers();

fetch('https://api.github.com/users/nitish-x18')
.then( (resolve) => {
    return resolve.json();
}).then( (data) => {
    console.log(data);
}).catch( (error) => {
    console.log('ERROR: ', error)
})