const controller = document.querySelector("#font-size-control");
const text = document.querySelector('#text');
text.style.fontSize = controller.value + "px"

controller.addEventListener("input", (event) => {
    text.style.fontSize = event.currentTarget.value + "px";
});

