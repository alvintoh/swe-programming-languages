"use strict";
let userName = "Max";
console.log(typeof userName);
const settings = {
    difficulty: "easy",
    minLevel: 10,
    didStart: false,
    players: ["Max", "Jane"],
};
// type Settings = typeof settings;
function loadData(s) {
    // ...
}
loadData(settings);
