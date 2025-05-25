class AdvancedUser {
  private _firstName: string = "";
  private _lastName: string = "";

  set firstName(name: string) {
    if (name.trim() === "") {
      throw new Error("Invalid name");
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
alv.lastName = "Toh";
console.log(alv.fullName);
