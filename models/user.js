class User{
    constructor({username,email,password,fullname}){
        this.username = username;
        this.email = email;
        this.password = password;
        this.fullname = fullname;
    }
}

module.exports = User;