
const changeBtn = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");

changeBtn.addEventListener ("click", ()=>{
  let randomColor = getRandomHexColor();
  
  document.body.style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
