const fontSizeControl = document.querySelector("input#font-size-control");
const spanText = document.querySelector("span#text");
fontSizeControl.addEventListener("input", onFontSizeControlInput);

function onFontSizeControlInput(event) {
  spanText.style.fontSize = `${Number(fontSizeControl.value)}px`;
}
