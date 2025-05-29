let names: Array<string> = ["Max", "Anna"];

type DataStore<T> = {
  [key: string]: T;
};

let store: DataStore<string | boolean> = {};
store.name = "Max";
store.isInstructor = true;

let nameStore: DataStore<string> = {};

function merge<T, U>(a: T, b: U) {
  return [a, b];
}

const ids = merge(1, "Max");

function mergeObj<T extends object, U extends object>(a: T, b: U) {
  return { ...a, ...b };
}

const merged = mergeObj({ username: "Max" }, { age: 30 });
console.log(merged);

class User<T> {
  constructor(public id: T) {}
}

const user = new User("i1");
user.id;
