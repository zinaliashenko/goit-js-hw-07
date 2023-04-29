const textInput = document.querySelector("input#validation-input");
textInput.addEventListener("blur", onTextInputBlur);
textInput.insertAdjacentHTML("afterend", "<p id=text></p>");

function onTextInputBlur() {
  textInput.removeFirstChild;
  textInput.classList.remove("valid", "invalid");
  const textLength = textInput.getAttribute("data-length");

  if (Number(textInput.value.length) === Number(textLength)) {
    textInput.classList.add("valid");
    text.innerHTML = "Great! There are 6 symbols";
    return;
  }
  textInput.classList.add("invalid");
  text.innerHTML = `${textInput.getAttribute("placeholder")}`;
}
