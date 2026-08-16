class user {
    constructor(name, password){
        this.name = name;
        this.password = password;
    }

    get name(){
        return this._name;
    }
    set name(value){
        this._name = value;
    }

    get password(){
        return this._password.toUpperCase();
    }
    set password(value){
        this._password = value.toUpperCase();
    }
}

const hitesh = new user("Hitesh", 'abcs');
console.log(hitesh.password);
console.log(hitesh.name);