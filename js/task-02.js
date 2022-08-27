const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");

const markup = ingredients.map ((ingredient) => {
const elem = document.createElement("li");
  elem.classList = "item";
  elem.textContent = ingredient;
return elem;
})

list.append(...markup)