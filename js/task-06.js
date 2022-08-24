const input = document.querySelector("#validation-input");

const dataLength = input.getAttribute("data-length");

input.addEventListener ("blur", (event) =>{
    event.currentTarget.value.length >= dataLength ?
    input.classList = "valid":
    input.classList = "invalid";
})