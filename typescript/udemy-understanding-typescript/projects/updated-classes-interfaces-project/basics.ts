// class User {
//   name: string;
//   age: number;

//   constructor(n: string, a: number) {
//     this.name = n;
//     this.age = a;
//   }
// }

class User {
  #role: string = "admin"; // Private property in vanilla JavaScript
  readonly hobbies: string[] = [];

  constructor(public name: string, private readonly age: number) {
    // The properties are automatically assigned to the class instance
  }

  greet() {
    console.log("My age is " + this.age);
  }
}

const max = new User("Max", 36);
const fred = new User("Fred", 29);

// max.hobbies = []; // This will not work because hobbies is readonly
max.hobbies.push("Sports"); // This will work because we are modifying the array, not reassigning it

console.log(max, fred);
