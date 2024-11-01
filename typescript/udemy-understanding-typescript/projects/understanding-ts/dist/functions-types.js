"use strict";
let userInput;
let functionTypesUserName;
userInput = 5;
userInput = "Max";
if (typeof userInput === "string") {
    functionTypesUserName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError("An error occurred!", 500);
//# sourceMappingURL=functions-types.js.map