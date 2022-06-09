let player = document.querySelector(".player");
// html location of dino
let bottomBlock = document.querySelector(".bottomBlock");
let gameOver = document.querySelector("#gameOver");
let startScreen = document.querySelector("#startScreen");
let topBlock = document.querySelector(".topBlock");
let dialoge = document.querySelector(".dialoge");

// function generateRandom() {
//   let randomNumber = Math.floor(Math.random() * (3000 - 2000) + 2000);
//   console.log(randomNumber);
// }

// function repeatGenerateRandom() {
//   setInterval(() => {
//     generateRandom();
//     // console.log(results);
//   }, 10);
// }

function spawnBlocks() {
  // let catus1 = document.createElement("div");
  // catus1.setAttribute("class", "catusMoving");
  // body.append(catus1);
  bottomBlock.classList.add("bottomMoving");
  topBlock.classList.add("topMoving");
}

// starting the game
window.addEventListener(
  "keydown",
  (start) => {
    if (start.code === "Space") {
      gameOver.style.display = "none";
      startScreen.style.display = "none";
      spawnBlocks();
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
  player.classList.add("jump");
  //add jump class into dino class
  setTimeout(function () {
    player.classList.remove("jump");
    dialoge.classList.remove("words");
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
  let playerXCoordinates = player.getBoundingClientRect().x;
  let playerYCoordinates = player.getBoundingClientRect().y;
  let playerWidth = player.getBoundingClientRect().width;
  let playerHeight = player.getBoundingClientRect().height;
  //^^ findind real time coordinates of player
  let bottomBlockXCoordinates = bottomBlock.getBoundingClientRect().x;
  let bottomBlockYCoordinates = bottomBlock.getBoundingClientRect().y;
  let bottomBlockWidth = bottomBlock.getBoundingClientRect().width;
  let bottomBlockHeight = bottomBlock.getBoundingClientRect().height;
  //^^finding real time coordinates of bottomBlock
  let topBlockXCoordinates = topBlock.getBoundingClientRect().x;
  let topBlockYCoordinates = topBlock.getBoundingClientRect().y;
  let topBlockWidth = topBlock.getBoundingClientRect().width;
  let topBlockHeight = topBlock.getBoundingClientRect().height;

  if (
    playerXCoordinates < bottomBlockXCoordinates + bottomBlockWidth &&
    playerXCoordinates + playerWidth > bottomBlockXCoordinates &&
    playerYCoordinates < bottomBlockYCoordinates + bottomBlockHeight &&
    playerYCoordinates + playerHeight > bottomBlockYCoordinates

    // playerXCoordinates > bottomBlockXCoordinates + bottomBlockWidth ||
    // playerXCoordinates + playerWidth < bottomBlockXCoordinates ||
    // playerYCoordinates > bottomBlockYCoordinates + bottomBlockHeight ||
    // playerYCoordinates + playerHeight < bottomBlockYCoordinates ||
    // playerXCoordinates > topBlockXCoordinates + topBlockWidth ||
    // playerXCoordinates + playerWidth < topBlockXCoordinates ||
    // playerYCoordinates > topBlockYCoordinates + topBlockHeight ||
    // playerYCoordinates + playerHeight < topBlockYCoordinates
  ) {
    gameOver.style.display = "block";
    bottomBlock.classList.remove("bottomMoving");
    topBlock.classList.remove("topMoving");
    console.log("collision!");
  } else if (
    playerXCoordinates < topBlockXCoordinates + topBlockWidth &&
    playerXCoordinates + playerWidth > topBlockXCoordinates &&
    playerYCoordinates < topBlockYCoordinates + topBlockHeight &&
    playerYCoordinates + playerHeight > topBlockYCoordinates
  ) {
    gameOver.style.display = "block";
    bottomBlock.classList.remove("bottomMoving");
    topBlock.classList.remove("topMoving");
    console.log("collision!");
  }
};

// let words = document.createElement("div");
// words.setAttribute("class", "words");
// words.innerHTML = `<h6>-Easy Peasy!</h6>`;
// dialoge.append(words);
// const parent = document.getElementById("dialoge");
// console.log(parent);
