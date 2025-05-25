"use strict";
// class User {
//   name: string;
//   age: number;
var _User_role;
//   constructor(n: string, a: number) {
//     this.name = n;
//     this.age = a;
//   }
// }
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        _User_role.set(this, "admin"); // Private property in vanilla JavaScript
        this.hobbies = [];
        // The properties are automatically assigned to the class instance
    }
    greet() {
        console.log("My age is " + this.age);
    }
}
_User_role = new WeakMap();
const max = new User("Max", 36);
const fred = new User("Fred", 29);
// max.hobbies = []; // This will not work because hobbies is readonly
max.hobbies.push("Sports"); // This will work because we are modifying the array, not reassigning it
console.log(max, fred);
