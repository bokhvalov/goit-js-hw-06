const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector('#value');

let value = 0;


decrementBtn.addEventListener('click',decrement)
incrementBtn.addEventListener('click',increment)

function increment() {
    value += 1;
    valueEl.textContent=value;
};

function decrement() {
    value = value - 1;
    valueEl.textContent=value;
};
