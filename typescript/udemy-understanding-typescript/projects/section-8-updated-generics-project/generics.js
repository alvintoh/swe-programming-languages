"use strict";
let names = ["Max", "Anna"];
let store = {};
store.name = "Max";
store.isInstructor = true;
let nameStore = {};
function merge(a, b) {
    return [a, b];
}
const ids = merge(1, "Max");
function mergeObj(a, b) {
    return Object.assign(Object.assign({}, a), b);
}
const merged = mergeObj({ username: "Max" }, { age: 30 });
console.log(merged);
class User {
    constructor(id) {
        this.id = id;
    }
}
const user = new User("i1");
user.id;
