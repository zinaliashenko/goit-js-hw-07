function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector("[data-create");
const destroyBtn = document.querySelector("[data-destroy");
const divBoxesRef = document.querySelector("div#boxes");
createBtn.addEventListener("click", onCreateBtnClick);

function onCreateBtnClick(event) {
  const amount = document.querySelector("[type='number']").value;
  createBoxes(amount);
}

function createBoxes(amount) {
  if (amount < 1 || amount > 100 || amount == null) {
    alert("Please input amount from 1 to 100");
    return;
  }

  destroyBoxes();
  const divArray = [];
  let wd = 30;
  let hd = 30;

  for (let index = 1; index <= amount; index++) {
    const divElement = document.createElement("div");
    divElement.style.width = wd + "px";
    divElement.style.height = hd + "px";
    divElement.style.backgroundColor = getRandomHexColor();

    // divElement.style.margin = "auto";
    // const textDiv = `${wd}px`;
    // divElement.innerText = textDiv;
    // divElement.style.textAlign = "center";

    divArray.push(divElement);
    wd += 10;
    hd += 10;
  }
  divBoxesRef.append(...divArray);
}

destroyBtn.addEventListener("click", destroyBoxes);

function destroyBoxes(event) {
  divBoxesRef.innerHTML = "";
}
