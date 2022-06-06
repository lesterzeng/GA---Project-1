const dino = document.querySelector(".dino");
// html location of dino
const catus = document.querySelector(".catus");
//html location of catus

// function startGame() {
//   let body = document.querySelector("body");
//   console.log(body);
//   let dino = document.createElement("dino");
//   console.log(dino);
//   dino.setAttribute("class", "dino");
//   body.append(dino);
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
  console.log("jumped!");
}
//^^ set timer to remove jump class from dino class, so as to able to add jump class again(multiple jumps)

document.addEventListener("keydown", playerControl);
//adding eventlisten, for when a key is pressed down, do function control,

//checking for collision by checking the match of x and y coordinates of the two objects every 10ms. If matched, game is over.
setInterval(function () {
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
    console.log("no collision!");
  } else {
    // alert("GG!");
    console.log("collision!");
  }
}, 0);
