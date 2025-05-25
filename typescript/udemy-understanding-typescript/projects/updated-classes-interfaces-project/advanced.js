"use strict";
class AdvancedUser {
    constructor() {
        this._firstName = "";
        this._lastName = "";
    }
    set firstName(name) {
        if (name.trim() === "") {
            throw new Error("Invalid name");
        }
        this._firstName = name;
    }
    set lastName(name) {
        if (name.trim() === "") {
            throw new Error("Invalid name");
        }
        this._lastName = name;
    }
    get fullName() {
        return this._firstName + " " + this._lastName;
    }
    static greet() {
        console.log("Hello");
    }
}
AdvancedUser.eid = "USER";
console.log(AdvancedUser.eid); // Accessing static property
const alv = new AdvancedUser();
alv.firstName = "Alvin";
alv.lastName = "Toh";
console.log(alv.fullName);
