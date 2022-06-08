let dino = document.querySelector(".dino");
// html location of dino
let catus = document.querySelector(".catus");
let gameOver = document.querySelector("#gameOver");
let startScreen = document.querySelector("#startScreen");

// let randomSpawnTime = setInterval(() => {
//   let randomNumber = Math.floor(Math.random() * (1500 - 1000) + 1000);
//   return randomNumber;
// }, 100);

function spawnCatus() {
  catus.classList.add("catusMoving");
}
// starting the game
window.addEventListener(
  "keydown",
  (start) => {
    if (start.code === "Space") {
      gameOver.style.display = "none";
      startScreen.style.display = "none";
      spawnCatus();
    }
  }
  // setInterval(function () {
  //   spawnCatus();
  //   console.log("spawned");
  // }, randomSpawnTime);
);
// function startGame() {
//   let body = document.querySelector("body");
//   let gameArea = document.createElement("gameArea");
//   let dino = document.createElement("dino");
//   let catus = document.createElement(".catus");
//   gameArea.setAttribute("class", "gameArea");
//   body.append(gameArea);
//   dino.setAttribute("class", "dino");
//   body.append(dino);
//   catus.setAttribute("class", "catus");
//   body.append(catus);
// }

// const startButton = document.querySelector("#start-game");
// startButton.addEventListener("click", startGame);

let currentlyJumping = false;
//prevent multiple entries later

//creating playable controls, to link with function jump.
function playerControl(e) {
  if (e.keyCode === 32 && currentlyJumping === false) {
    currentlyJumping = true;
    jump();
  }
  // if space bar is pressed, do function jump.
  else if (e.keyCode === 38 && currentlyJumping === false) {
    currentlyJumping = true;
    jump();
  }
  // if arrowUp is pressed, do function jump
}

// should link with html, then activate jump animation in css
function jump() {
  dino.classList.add("jump");
  //add jump class into dino class
  setTimeout(function () {
    dino.classList.remove("jump");
    currentlyJumping = false;
  }, 500);
  // console.log("jumped!");
}
//^^ set timer to remove jump class from dino class, so as to able to add jump class again(multiple jumps)

document.addEventListener("keydown", playerControl);
//adding eventlisten, for when a key is pressed down, do function control,

//checking for collision by checking the match of x and y coordinates of the two objects every 10ms. If matched, game is over.
// let checkCollision = setInterval(someFunc, 100);

let checkCollision = setInterval(() => {
  getAndMatchXYCoordinates();
}, 100);

const getAndMatchXYCoordinates = () => {
  let dinoXCoordinates = dino.getBoundingClientRect().x;
  let dinoYCoordinates = dino.getBoundingClientRect().y;
  let dinoWidth = dino.getBoundingClientRect().width;
  let dinoHeight = dino.getBoundingClientRect().height;
  //^^ findind real time coordinates of dino
  let catusXCoordinates = catus.getBoundingClientRect().x;
  let catusYCoordinates = catus.getBoundingClientRect().y;
  let catusWidth = catus.getBoundingClientRect().width;
  let catusHeight = catus.getBoundingClientRect().height;
  //^^finding real time coordinates of obstacle.

  if (
    dinoXCoordinates > catusXCoordinates + catusWidth ||
    dinoXCoordinates + dinoWidth < catusXCoordinates ||
    dinoYCoordinates > catusYCoordinates + catusHeight ||
    dinoYCoordinates + dinoHeight < catusYCoordinates
  ) {
    // console.log("no collision!");
  } else {
    gameOver.style.display = "block";
    catus.classList.remove("catusMoving");
    // console.log("collision!");
  }
};
