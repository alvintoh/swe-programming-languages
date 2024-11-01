"use strict";
function basicsAdd(n1, n2, showResult, phrase) {
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
    return;
}
let number1;
number1 = 5;
const number2 = 2.8;
const basicsPrintResult = true;
const resultPhrase = "Result is: ";
basicsAdd(number1, number2, basicsPrintResult, resultPhrase);
//# sourceMappingURL=basics.js.map