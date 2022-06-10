const player = document.querySelector(".player");
const bottomBlock = document.querySelector(".bottomBlock");
const gameOver = document.querySelector("#gameOver");
const startScreen = document.querySelector("#startScreen");
const topBlock = document.querySelector(".topBlock");
const dialoge = document.querySelector(".dialoge");

function spawnBlocks() {
  bottomBlock.classList.add("bottomMoving");
  topBlock.classList.add("topMoving");
}

window.addEventListener("keydown", (start) => {
  if (start.code === "Space") {
    gameOver.style.display = "none";
    startScreen.style.display = "none";
    spawnBlocks();
  }
});

let currentlyJumping = false;

function playerControl(e) {
  if (e.keyCode === 32 && currentlyJumping === false) {
    currentlyJumping = true;
    jump();
  } else if (e.keyCode === 38 && currentlyJumping === false) {
    currentlyJumping = true;
    jump();
  }
}

function jump() {
  player.classList.add("jump");
  setTimeout(function () {
    player.classList.remove("jump");
    currentlyJumping = false;
  }, 500);
}

document.addEventListener("keydown", playerControl);

let checkCollision = setInterval(() => {
  getAndMatchXYCoordinates();
}, 100);

const getAndMatchXYCoordinates = () => {
  let playerXCoordinates = player.getBoundingClientRect().x;
  let playerYCoordinates = player.getBoundingClientRect().y;
  let playerWidth = player.getBoundingClientRect().width;
  let playerHeight = player.getBoundingClientRect().height;

  let bottomBlockXCoordinates = bottomBlock.getBoundingClientRect().x;
  let bottomBlockYCoordinates = bottomBlock.getBoundingClientRect().y;
  let bottomBlockWidth = bottomBlock.getBoundingClientRect().width;
  let bottomBlockHeight = bottomBlock.getBoundingClientRect().height;

  let topBlockXCoordinates = topBlock.getBoundingClientRect().x;
  let topBlockYCoordinates = topBlock.getBoundingClientRect().y;
  let topBlockWidth = topBlock.getBoundingClientRect().width;
  let topBlockHeight = topBlock.getBoundingClientRect().height;

  if (
    playerXCoordinates < bottomBlockXCoordinates + bottomBlockWidth &&
    playerXCoordinates + playerWidth > bottomBlockXCoordinates &&
    playerYCoordinates < bottomBlockYCoordinates + bottomBlockHeight &&
    playerYCoordinates + playerHeight > bottomBlockYCoordinates
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
// Additional Work For Future ////////////////////////////////////////////////////////////////////////////////////////////

// let words = document.createElement("div");
// words.setAttribute("class", "words");
// words.innerHTML = `<h6>-Easy Peasy!</h6>`;
// dialoge.append(words);
// const parent = document.getElementById("dialoge");
// console.log(parent);

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

// let catus1 = document.createElement("div");
// catus1.setAttribute("class", "catusMoving");
// body.append(catus1

// setInterval(function () {
//   spawnCatus();
//   console.log("spawned");
// }, randomSpawnTime);

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

// playerXCoordinates > bottomBlockXCoordinates + bottomBlockWidth ||
// playerXCoordinates + playerWidth < bottomBlockXCoordinates ||
// playerYCoordinates > bottomBlockYCoordinates + bottomBlockHeight ||
// playerYCoordinates + playerHeight < bottomBlockYCoordinates ||
// playerXCoordinates > topBlockXCoordinates + topBlockWidth ||
// playerXCoordinates + playerWidth < topBlockXCoordinates ||
// playerYCoordinates > topBlockYCoordinates + topBlockHeight ||
// playerYCoordinates + playerHeight < topBlockYCoordinates
