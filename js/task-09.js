function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector("button.change-color");
const spanColorRef = document.querySelector("span.color");
const bodyElement = document.body;

changeColorBtn.addEventListener("click", onChangeColorBtnClick);

function onChangeColorBtnClick(event) {
  bodyElement.style.backgroundColor = `${getRandomHexColor()}`;
  spanColorRef.textContent = bodyElement.style.backgroundColor;
}
