const content = document.querySelector('.content');
let markup = '';
let player = 'X';
let stepX = [];
let stepO = [];
const win = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

// ---- make a move ---- //

for (let i = 0; i < 9; i++) {
  markup += `<div class="item" data-id="${1 + i}"></div>`;
}
content.insertAdjacentHTML('beforeend', markup); // adding markup in js

// ---- make a move ---- //
content.addEventListener('click', onClick);
function onClick(event) {
  if (!event.target.textContent) {
    const id = Number(event.target.dataset.id);
    if (player === 'X') {
      stepX.push(id); // += div.item number the player choose
      const isWinner = checkWin(stepX);
      if (isWinner) {
        alert(`We have a winner! It's ${player}`);
        doReset();
        return;
      }
    } else {
      stepO.push(id);
      const isWinner = checkWin(stepO);
      if (isWinner) {
        alert(`We have a winner! It's ${player}`);
        doReset();
        return;
      }
    }

    event.target.textContent = player; // write a symbol of the player
    player = player === 'X' ? 'O' : 'X'; // change to next player
  }
}

// ---- check winner ---- //
function checkWin(arr) {
  const result = win.some((values) => values.every((value) => arr.includes(value)));
  return result;
}

// ---- reset feild ---- //
const reset = document.querySelector("[type='button']"); // reset button
reset.addEventListener('click', doReset);

function doReset() {
  content.innerHTML = markup;
  stepX = [];
  stepO = [];
  player = 'X';
}

// const items = Array.from(document.querySelectorAll(".item")); // div.items nodelist to array
// reset.addEventListener("click", () => {
//   items.forEach((item) => (item.textContent = ""));
// });
