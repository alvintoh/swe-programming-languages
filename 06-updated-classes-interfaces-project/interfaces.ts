interface Authenticatable {
  email: String;
  password: String;

  login(): void;
  logout(): void;
}

interface AuthenticatableAdmin extends Authenticatable {
  role: "admin" | "superadmin";
}

class AuthenticatableUser implements Authenticatable {
  constructor(
    public userName: string,
    public email: String,
    public password: String
  ) {}

  login() {
    // ...
  }

  logout() {
    // ...
  }
}

// ...

function authenticate(user: Authenticatable) {
  user.login();
}

//interface Authenticatable {
//  role: string;
//}

let user: Authenticatable;

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
