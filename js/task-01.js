const items = document.querySelectorAll('.item');

console.log (`Number of categories : ${items.length}`);

items.forEach((category) => {
    console.log(`Category: ${category.firstElementChild.textContent}`);
    console.log(`Elements: ${category.lastElementChild.children.length}`);
})