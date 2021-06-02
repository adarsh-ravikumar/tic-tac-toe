let xPlayed = false;
let boardFull = false;
let gameOver = false;
let xWon = false;
let oWon = false;
let delay = 250; //in milliseconds
let xScore = 0;
let oScore = 0;
let board = document.querySelector(".game-board");

let spaces = document.querySelectorAll(".space");

function move(pos) {
  if (xPlayed == false && spaces[pos].innerHTML == "" && boardFull == false) {
    xPlayed = true;
    spaces[pos].innerHTML = "X";
    spaces[pos].classList.add("red");

    if (
      spaces[0].innerHTML != "" &&
      spaces[1].innerHTML != "" &&
      spaces[2].innerHTML != "" &&
      spaces[3].innerHTML != "" &&
      spaces[4].innerHTML != "" &&
      spaces[5].innerHTML != "" &&
      spaces[6].innerHTML != "" &&
      spaces[7].innerHTML != "" &&
      spaces[8].innerHTML != ""
    ) {
      boardFull = true;
    }

    checkBoard();
  } else if (
    xPlayed == true &&
    spaces[pos].innerHTML == "" &&
    boardFull == false
  ) {
    xPlayed = false;
    spaces[pos].innerHTML = "O";
    spaces[pos].classList.add("blue");

    if (
      spaces[0].innerHTML != "" &&
      spaces[1].innerHTML != "" &&
      spaces[2].innerHTML != "" &&
      spaces[3].innerHTML != "" &&
      spaces[4].innerHTML != "" &&
      spaces[5].innerHTML != "" &&
      spaces[6].innerHTML != "" &&
      spaces[7].innerHTML != "" &&
      spaces[8].innerHTML != ""
    ) {
      boardFull = true;
    }

    checkBoard();
  }
}

function checkBoard() {
  // Player X
  // Rows
  if (
    spaces[0].innerHTML == "X" &&
    spaces[3].innerHTML == "X" &&
    spaces[6].innerHTML == "X"
  ) {
    xWon = true;
    setTimeout(() => {
      alert("X won the game!");
      resetBoard();
    }, delay);

    gameOver = false;
    xScore++;
  } else if (
    spaces[1].innerHTML == "X" &&
    spaces[4].innerHTML == "X" &&
    spaces[7].innerHTML == "X"
  ) {
    xWon = true;
    setTimeout(() => {
      alert("X won the game!");
      resetBoard();
    }, delay);

    gameOver = false;
    xScore++;
  } else if (
    spaces[2].innerHTML == "X" &&
    spaces[5].innerHTML == "X" &&
    spaces[8].innerHTML == "X"
  ) {
    xWon = true;
    setTimeout(() => {
      alert("X won the game!");
      resetBoard();
    }, delay);

    gameOver = false;
    xScore++;
  }

  // Columns
  else if (
    spaces[0].innerHTML == "X" &&
    spaces[1].innerHTML == "X" &&
    spaces[2].innerHTML == "X"
  ) {
    xWon = true;
    setTimeout(() => {
      alert("X won the game!");
      resetBoard();
    }, delay);

    gameOver = false;
    xScore++;
  } else if (
    spaces[3].innerHTML == "X" &&
    spaces[4].innerHTML == "X" &&
    spaces[5].innerHTML == "X"
  ) {
    xWon = true;
    setTimeout(() => {
      alert("X won the game!");
      resetBoard();
    }, delay);

    gameOver = false;
    xScore++;
  } else if (
    spaces[6].innerHTML == "X" &&
    spaces[7].innerHTML == "X" &&
    spaces[8].innerHTML == "X"
  ) {
    xWon = true;
    setTimeout(() => {
      alert("X won the game!");
      resetBoard();
    }, delay);

    gameOver = false;
    xScore++;
  }

  // Diagonals
  else if (
    spaces[0].innerHTML == "X" &&
    spaces[4].innerHTML == "X" &&
    spaces[8].innerHTML == "X"
  ) {
    xWon = true;
    setTimeout(() => {
      alert("X won the game!");
      resetBoard();
    }, delay);

    gameOver = false;
    xScore++;
  } else if (
    spaces[2].innerHTML == "X" &&
    spaces[4].innerHTML == "X" &&
    spaces[6].innerHTML == "X"
  ) {
    xWon = true;
    setTimeout(() => {
      alert("X won the game!");
      resetBoard();
    }, delay);

    gameOver = false;
    xScore++;
  } else if (boardFull == true) {
    setTimeout(() => {
      alert("Draw!");
      resetBoard();
    }, delay);
  }

  // Player O
  // Rows
  if (
    spaces[0].innerHTML == "O" &&
    spaces[3].innerHTML == "O" &&
    spaces[6].innerHTML == "O"
  ) {
    oWon = true;
    setTimeout(() => {
      alert("O won the game!");
      resetBoard();
    }, delay);

    gameOver = false;
    oScore++;
  } else if (
    spaces[1].innerHTML == "O" &&
    spaces[4].innerHTML == "O" &&
    spaces[7].innerHTML == "O"
  ) {
    oWon = true;
    setTimeout(() => {
      alert("O won the game!");
      resetBoard();
    }, delay);

    oScore++;
  } else if (
    spaces[2].innerHTML == "O" &&
    spaces[5].innerHTML == "O" &&
    spaces[8].innerHTML == "O"
  ) {
    oWon = true;
    setTimeout(() => {
      alert("O won the game!");
      resetBoard();
    }, delay);

    oScore++;
  }

  // Columns
  else if (
    spaces[0].innerHTML == "O" &&
    spaces[1].innerHTML == "O" &&
    spaces[2].innerHTML == "O"
  ) {
    oWon = true;
    setTimeout(() => {
      alert("O won the game!");
      resetBoard();
    }, delay);

    gameOver = false;
    oScore++;
  } else if (
    spaces[3].innerHTML == "O" &&
    spaces[4].innerHTML == "O" &&
    spaces[5].innerHTML == "O"
  ) {
    oWon = true;
    setTimeout(() => {
      alert("O won the game!");
      resetBoard();
    }, delay);

    gameOver = false;
    oScore++;
  } else if (
    spaces[6].innerHTML == "O" &&
    spaces[7].innerHTML == "O" &&
    spaces[8].innerHTML == "O"
  ) {
    oWon = true;
    setTimeout(() => {
      alert("O won the game!");
      resetBoard();
    }, delay);

    gameOver = false;
    oScore++;
  }

  // Diagonals
  else if (
    spaces[0].innerHTML == "O" &&
    spaces[4].innerHTML == "O" &&
    spaces[8].innerHTML == "O"
  ) {
    oWon = true;
    setTimeout(() => {
      alert("O won the game!");
      resetBoard();
    }, delay);

    gameOver = false;
    oScore++;
  } else if (
    spaces[2].innerHTML == "O" &&
    spaces[4].innerHTML == "O" &&
    spaces[6].innerHTML == "O"
  ) {
    oWon = true;
    setTimeout(() => {
      alert("O won the game!");
      resetBoard();
    }, delay);

    gameOver = false;
    oScore++;
  } else if (boardFull == true && gameOver == true) {
    setTimeout(() => {
      alert("Draw!");
      resetBoard();
    }, delay);
  }
}

function resetBoard() {
  for (i = 0; i < spaces.length; i++) {
    let removeColor = spaces[i].innerHTML == "X" ? spaces[i].classList.remove("red") : spaces[i].classList.remove("blue")
    spaces[i].classList.add("fadeOut")
    spaces[i].innerHTML = "";

    setTimeout(() => {
      spaces[i].classList.remove("fadeOut")
    }, 700)

  }

  xWon = false;
  oWon = false;
  boardFull = false;
  gameStarted = false;
  xPlayed = false;

  let xScoreText = document.querySelector(".x");
  let oScoreText = document.querySelector(".o");

  xScoreText.innerHTML = `X: ${xScore}`;
  oScoreText.innerHTML = `O: ${oScore}`;

}
