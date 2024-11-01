let appId = "abc";
const compilerConfigurationButton = document.querySelector("button")!;

function appAdd(n1: number, n2: number) {
  if (n1 + n2 > 0) {
    return n1 + n2;
  }
  return;
}

function clickHandler(message: string) {
  // let appUserName = "Max";
  console.log("Clicked! " + message);
}
// a comment
if (compilerConfigurationButton) {
  compilerConfigurationButton.addEventListener(
    "click",
    clickHandler.bind(null, "You're welcome!")
  );
}
