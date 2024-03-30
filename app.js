"use strict";

const board = Array.from({ length: 9 }, (_, str) => "");
const boardItems = Array.from(document.querySelectorAll(".grid-item"));
const overlayEl = document.querySelector(".overlay");
let playerToken = false;
let count = 1;

function checkWinner(pattern) {
  if (board[0] + board[1] + board[2] === pattern) return true;
  else if (board[3] + board[4] + board[5] === pattern) return true;
  else if (board[6] + board[7] + board[8] === pattern) return true;
  else if (board[0] + board[3] + board[6] === pattern) return true;
  else if (board[1] + board[4] + board[7] === pattern) return true;
  else if (board[2] + board[5] + board[8] === pattern) return true;
  else if (board[0] + board[4] + board[8] === pattern) return true;
  else if (board[2] + board[4] + board[6] === pattern) return true;
  else return false;
}

for (let idx in boardItems) {
  const item = boardItems[idx];
  item.addEventListener("click", () => {
    const currentPlayer = playerToken ? "O" : "X";

    item.innerHTML = currentPlayer;
    board[idx] = currentPlayer;
    item.classList.add("disable-item");

    if (count === 9) {
      overlayEl.innerHTML = `Draw Game`;
      overlayEl.classList.remove("hide");
    } else if (
      checkWinner(`${currentPlayer}${currentPlayer}${currentPlayer}`)
    ) {
      overlayEl.innerHTML = `Congratulations ${currentPlayer} Won`;
      overlayEl.classList.remove("hide");
    }

    playerToken = !playerToken;
    count++;
  });
}
