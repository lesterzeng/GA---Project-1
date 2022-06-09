# GA-Project-1

GA Project 1 : Jumping Lester(Formally known as Dodging Dino - Chrome Dino Clone)

Objective
To create a clone of the popular side-scrolling game known as "Chrome Dino".

About Game
It is a side-scrolling game, where the player's avatar jumps to avoid collision with an oncoming obstable, and stay un-hit as long as possible. The game ends when player and obstable collide.

Approach Taken
The idea is to create, and set animations parameters for the objects using CSS, and to trigger the animations using Javascript. In other words, Javascript would push the class into HTML, and HTML will take CSS's codes to create and animate the object.

There are 3x main objects on screen; 1x player and 2x obstacles.

The general layout of the game is as follows;
1x player - stationary position on the left.
2x obstacles - moving from right to left at different speeds, at different heights.

Two main animations are present; jumping of the player, and moving (from right to left) of the 2x obstabcles. We trigger them by creating a jump function, and a spawnBlock function.

One highlight of the two main functions is the jump function for the player. The challenge for the jump function is preventing the function from triggering while in mid jump; multiple user-input jump function entries during a jump. When there are multiple entries, the animation would appear to have a spasm, and out of place, resulting in unsuccessful jumps.

There are a few ways to tackle this issue. The way we did it here is to include a boolean variable, and a conditional(if). So only if, when the variable, currentlyJumping = false(by default), jump function is executable. Once the jump function is triggered, currentlyJumping = true, therefore jump function condition would not be met and be executable.

Related to the function jump, there was also an issue of only ever jumping once, for the entire game.

This issue was also resolved by removing the jump div from the html, by using Javascript's SetTimeOut, set for the whole duration of the animation, within the jump function.

For the start and end screen, it is done by creating a div for each, inserting and removing its display style to block and none according to the state of the game, using Javascript.

To end the game, is to get hit by the obstacles.

This was achieved by getting the x, y, width and height of the 3x objects in real time by using a fast SetIntervals. We are able to plot the 2x obstacles in the gameArea, and put it under a conditional. If it's a overlap of coordinates, it's a collision and the game ends.

Future features to work on
Score system - showing current and high scores.
Amount of lives.
Add auto difficiulty stages.
Pause function.
Player gain size after a certain period of time.
Add moving terrain, and clouds for aesthetics.
Randomizing the spawn rate of the obstacles.

Unsolved problems
-Randomizing the spawn rate of the obstables.
