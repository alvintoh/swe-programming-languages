let userInput: unknown;
let functionTypesUserName: string;

userInput = 5;
userInput = "Max";
if (typeof userInput === "string") {
  functionTypesUserName = userInput;
}

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
  // while (true) {}
}

generateError("An error occurred!", 500);
