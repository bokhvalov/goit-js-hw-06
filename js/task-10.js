const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", eraseBoxes);

let boxWidth = 30;
let boxHeight = 30;

function createBoxes() {
  const inputVal = document.querySelector("input").value;
  console.log(inputVal);
  for (let i = 0; i < inputVal; i += 1) {
    const container = document.createElement("div");

    container.style.width = `${boxWidth}px`;
    container.style.height = `${boxHeight}px`;
    container.style.backgroundColor = getRandomHexColor();

    boxWidth = boxWidth + 10;
    boxHeight = boxHeight + 10;

    boxes.insertAdjacentElement("beforeend", container);
  }
}

function eraseBoxes() {
  boxes.innerHTML = "";
  boxWidth = 30;
  boxHeight = 30;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
