"use strict";
// type ElementType<T extends any[]> = T[number];
// type Example1 = ElementType<StringArray>; // string
let text = 1;
function getFullName(person) {
    if ("firstName" in person &&
        "lastName" in person &&
        person.firstName &&
        person.lastName) {
        return `${person.firstName} ${person.lastName}`;
    }
    throw new Error("No firstname and / or lastname found.");
}
const name1 = getFullName({});
const name2 = getFullName({ firstName: "Max", lastName: "Schwarz" });
