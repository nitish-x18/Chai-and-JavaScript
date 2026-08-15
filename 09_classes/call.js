const setUser = function(userName){
    this.userName = userName;
    console.log('Called')
}

const CreateUser = function(userName, email, isloogedin){
    setUser.call(this, userName);

    this.email = email;
    this.isloogedin = isloogedin;
}

const One = new CreateUser("nitish", "chai@fb.com", true);
console.log(One);