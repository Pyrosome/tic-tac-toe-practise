const content = document.querySelector(".content");

// adding markup in js
for (let i = 0; i < 9; i++) {
  content.insertAdjacentHTML(
    "beforeend",
    `<div class="item" data-id="${1 + i}"></div>`
  );
}

let player = "X";
let stepX = [];
let stepO = [];

content.addEventListener("click", onClick);
function onClick(event) {
  if (!event.target.textContent) {
    const id = event.target.dataset.id;
    event.target.textContent = player; // write a symbol of the player on the feild
    player === "X" ? stepX.push(id) : stepO.push(id); // get div.item id for the player
    player = player === "X" ? "O" : "X"; // change to next player
  }
}

const reset = document.querySelector("[type='button']"); // reset button
const items = Array.from(document.querySelectorAll(".item")); // div.items nodelist to array
// reset by click button
reset.addEventListener("click", () => {
  items.forEach((item) => (item.textContent = ""));
  console.log(stepX);
  stepX = [];
  stepO = [];
});
