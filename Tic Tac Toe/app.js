const board = document.getElementById("board");
const squares = document.getElementsByClassName("square");
const player = ["X", "O"];
let defaultPlayer = player[0];
const endMessage = document.createElement("h2");
endMessage.innerText = "";
endMessage.style.marginTop = "30px";
endMessage.style.textAlign = "center";
board.after(endMessage);

const winningPairs = [
  [0, 3, 6],
  [0, 1, 2],
  [1, 4, 7],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
];

for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener("click", () => {
    if (squares[i].textContent !== "") {
      return;
    }
    squares[i].textContent = defaultPlayer;
    if (checkWin(defaultPlayer)) {
      endMessage.textContent = `Game over ${defaultPlayer} won!`;
      return;
    }
    if (checkTie()) {
      endMessage.textContent = `Game over match was a Tie`;
      return;
    }
    defaultPlayer = defaultPlayer === player[0] ? player[1] : player[0];
    if (defaultPlayer === player[0]) {
      endMessage.textContent = `Now its ${player[0]}'s turn`;
    } else {
      endMessage.textContent = `Now its ${player[1]}'s turn`;
    }
  });
}

function checkWin(defaultPlayer) {
  for (i = 0; i < winningPairs.length; i++) {
    const [a, b, c] = winningPairs[i];
    if (
      squares[a].textContent === defaultPlayer &&
      squares[b].textContent === defaultPlayer &&
      squares[c].textContent === defaultPlayer
    ) {
      return true;
    }
  }
  return false;
}
function checkTie() {
  for (i = 0; i < squares.length; i++) {
    if ((squares[i].textContent === "")) {
      return false;
    }
  }
  return true;
}

function restartGame() {
  for (i = 0; i < squares.length; i++) {
    squares[i].textContent = "";
  }
  endMessage.textContent = `Its ${player[0]}'s turn`;
  defaultPlayer = player[0];
}
