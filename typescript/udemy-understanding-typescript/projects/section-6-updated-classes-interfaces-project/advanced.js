"use strict";
class AdvancedUser {
    constructor() {
        this._firstName = "";
        this._lastName = "";
    }
    set firstName(name) {
        if (name.trim() === "") {
            throw new Error("Invalid first name");
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
alv.lastName = "Doe";
// alv._firstName = "Alvin 2";
console.log(alv.fullName);
class Employee extends AdvancedUser {
    constructor(jobTitle) {
        super();
        this.jobTitle = jobTitle;
        // super.firstName = Alvin;
    }
    work() {
        // ...
        console.log(this._firstName);
        // super._firstName
    }
}
class UIElement {
    constructor(identifier) {
        this.identifier = identifier;
    }
    clone(targetLocation) {
        // logic to duplicate the UI element
    }
}
// let uiElement = new UIElement
// Abstract classes should only be used as base classes to be extended from
class SideDrawerElement extends UIElement {
    constructor(identifier, position) {
        super(identifier);
        this.identifier = identifier;
        this.position = position;
    }
}
