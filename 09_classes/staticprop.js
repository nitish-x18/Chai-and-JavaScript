class user {
    constructor(username){
        this.username = username;
    }

    loggedMe(){
        console.log(`username: ${this.username}`);
    }

    //with static keyword this method cant be acced by anyone
    static createId(){
        return `${Math.floor(Math.random() * 10000)}`
    }
}

const Hitesh = new user("Hitesh");

console.log(Hitesh.createId());