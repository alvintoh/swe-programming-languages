class AdvancedUser {
  protected _firstName: string = "";
  private _lastName: string = "";

  set firstName(name: string) {
    if (name.trim() === "") {
      throw new Error("Invalid first name");
    }
    this._firstName = name;
  }

  set lastName(name: string) {
    if (name.trim() === "") {
      throw new Error("Invalid name");
    }
    this._lastName = name;
  }

  get fullName(): string {
    return this._firstName + " " + this._lastName;
  }

  static eid = "USER";

  static greet(): void {
    console.log("Hello");
  }
}

console.log(AdvancedUser.eid); // Accessing static property

const alv = new AdvancedUser();
alv.firstName = "Alvin";
alv.lastName = "Doe";
// alv._firstName = "Alvin 2";
console.log(alv.fullName);

class Employee extends AdvancedUser {
  constructor(public jobTitle: string) {
    super();
    // super.firstName = Alvin;
  }

  work() {
    // ...
    console.log(this._firstName);
    // super._firstName
  }
}

abstract class UIElement {
  constructor(public identifier: string) {}

  clone(targetLocation: string) {
    // logic to duplicate the UI element
  }
}

// let uiElement = new UIElement
// Abstract classes should only be used as base classes to be extended from

class SideDrawerElement extends UIElement {
  constructor(public identifier: string, public position: "left" | "right") {
    super(identifier);
  }
}
