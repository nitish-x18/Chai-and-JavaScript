class user {
    constructor(username){
        this.username = username;
    }

    logedMe(){
        console.log(`Logged by ${this.username}`);
    }
}

class teacher extends user {
    constructor(username, email, pass){
        super(username);
        this.email = email;
        this,pass = pass;
    }

    addCourse(){
        console.log(`New course added by ${this.username}`);
    }
}

const chai = new teacher("Chai", "chai@gmail.com", 1234);
chai.addCourse();
chai.logedMe();

const tea = new user("tea", "tea@gail.com", 9876);
tea.logedMe();