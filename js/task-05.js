const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", onTextInput);

function onTextInput(event) {
  output.textContent = event.currentTarget.value;
}
