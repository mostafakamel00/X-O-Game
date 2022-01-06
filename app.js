let turn = "x",
  title = document.querySelector(".title"),
  squares = [];

let click = new Audio("./voice/mixkit-arcade-game-jump-coin-216.wav");
let theWinner = new Audio(
  "./voice/Download Winner Group Shout Royalty Free Sound Effects Track.mp3"
);

function nums(num1, num2, num3) {
  title.innerHTML = `${squares[num1]} winner`;
  document.getElementById(`item${num1}`).style.backgroundColor = "#000";
  document.getElementById(`item${num2}`).style.backgroundColor = "#000";
  document.getElementById(`item${num3}`).style.backgroundColor = "#000";
  setTimeout(() => {
    theWinner.play();
  }, 500);
  setInterval(() => {
    title.innerHTML += ".";
  }, 1000);
  setTimeout(() => {
    location.reload();
  }, 4000);
}

function winner() {
  for (let i = 1; i < 10; i++) {
    squares[i] = document.getElementById(`item${i}`).innerHTML;
  }
  if (
    squares[1] == squares[2] &&
    squares[2] == squares[3] &&
    squares[1] != ""
  ) {
    nums(1, 2, 3);
  } else if (
    squares[4] == squares[5] &&
    squares[5] == squares[6] &&
    squares[6] != ""
  ) {
    nums(4, 5, 6);
  } else if (
    squares[7] == squares[8] &&
    squares[8] == squares[9] &&
    squares[9] != ""
  ) {
    nums(7, 8, 9);
  } else if (
    squares[1] == squares[4] &&
    squares[4] == squares[7] &&
    squares[7] != ""
  ) {
    nums(1, 4, 7);
  } else if (
    squares[2] == squares[5] &&
    squares[5] == squares[8] &&
    squares[8] != ""
  ) {
    nums(2, 5, 8);
  } else if (
    squares[3] == squares[6] &&
    squares[6] == squares[9] &&
    squares[9] != ""
  ) {
    nums(3, 6, 9);
  } else if (
    squares[1] == squares[5] &&
    squares[5] == squares[9] &&
    squares[9] != ""
  ) {
    nums(1, 5, 9);
  } else if (
    squares[3] == squares[5] &&
    squares[5] == squares[7] &&
    squares[7] != ""
  ) {
    nums(3, 5, 7);
  }
}

function game(id) {
  let el = document.getElementById(id);
  if (turn === "x" && el.innerHTML == "") {
    el.innerHTML = "x";
    turn = "o";
    title.innerHTML = "o";
  } else if (turn === "o" && el.innerHTML == "") {
    el.innerHTML = "o";
    turn = "x";
    title.innerHTML = "x";
  }
  winner();
  click.play();
}
