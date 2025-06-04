const form = document.querySelector("form")!;
const addressInput = document.getElementById("address")! as HTMLInputElement;

function searchAddressHandler(event: Event) {
  event.preventDefault();
  const enteredAddress = addressInput.value;
  if (!enteredAddress || enteredAddress.trim().length === 0) {
    alert("Please enter a valid address!");
    return;
  }
}

form.addEventListener("submit", searchAddressHandler);
