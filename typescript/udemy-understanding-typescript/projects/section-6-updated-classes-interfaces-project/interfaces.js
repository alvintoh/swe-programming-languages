"use strict";
class AuthenticatableUser {
    constructor(userName, email, password) {
        this.userName = userName;
        this.email = email;
        this.password = password;
    }
    login() {
        // ...
    }
    logout() {
        // ...
    }
}
// ...
function authenticate(user) {
    user.login();
}
//interface Authenticatable {
//  role: string;
//}
let user;
user = {
    email: "test@example.com",
    password: "abc1",
    login() {
        // reach out a database, check credentials, create a session
    },
    logout() {
        // clear the session
    },
};
