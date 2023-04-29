const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const counterValue = document.querySelector("#value");
counterValue.value = 0;

decrementBtn.addEventListener("click", onDecrementBtnClick);

function onDecrementBtnClick(event) {
  const decrementCounter = Number(counterValue.innerText) - 1;
  counterValue.innerText = decrementCounter;
}

incrementBtn.addEventListener("click", onIncrementBtnClick);

function onIncrementBtnClick(event) {
  const incrementCounter = Number(counterValue.innerText) + 1;
  counterValue.innerText = incrementCounter;
}
