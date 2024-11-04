"use strict";
let appId = "abc";
const compilerConfigurationButton = document.querySelector("button");
function appAdd(n1, n2) {
    if (n1 + n2 > 0) {
        return n1 + n2;
    }
    return;
}
function clickHandler(message) {
    console.log("Clicked! " + message);
}
if (compilerConfigurationButton) {
    compilerConfigurationButton.addEventListener("click", clickHandler.bind(null, "You're welcome!"));
}
//# sourceMappingURL=compiler-configuration.js.map