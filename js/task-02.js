const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");

let markup = [];

ingredients.forEach((ingredient) => { 
  const elem = document.createElement("li");
  elem.classList = "item";
  elem.textContent = ingredient;

markup.push(elem)
})

list.append(...markup)