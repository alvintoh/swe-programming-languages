"use strict";
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role[Role["READ_ONLY"] = 100] = "READ_ONLY";
    Role["AUTHOR"] = "AUTHOR";
})(Role || (Role = {}));
const obsPerson = {
    name: "Maximilian",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN,
};
let favoriteActivities;
favoriteActivities = ["Sports"];
console.log(obsPerson.name);
for (const hobby of obsPerson.hobbies) {
    console.log(hobby.toUpperCase());
}
if (obsPerson.role === Role.ADMIN) {
    console.log("is admin");
}
//# sourceMappingURL=obs-arrays-enums.js.map