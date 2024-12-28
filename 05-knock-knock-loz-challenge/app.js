/*
Learning Objectives:
  1. Understand and utilize DOM element selection.
  2. Implement event listeners on images.
  3. Manipulate image attributes dynamically based on user interactions and randomness.

Brief:
You're presented with two closed doors. Your task is to choose one to reveal what's behind both. Will you find Loz behind the door you chose or the other one? The outcome should be random.

Expected Outcomes:
  1. Initially, both doors are closed.
  2. When one door is clicked, both doors should open, revealing either an empty room or Loz behind them.
*/

// Place your plan and solution below!

// Grab the element for both closed doors
let doors = document.getElementsByClassName("door");

// Create the random function, for either 0 or 1 to trigger
function randomInt() {
  return Math.floor(Math.random() * 2);
}

// Create a function that causes both closed doors to be replaced with either empty door, at random, when clicked
function doorReveal (){
  const randomNum = randomInt();
  if (randomNum === 0){
    doors[0].src = "door-open-empty.png";
    doors[1].src = "door-open-loz.png";
  }
  else {
    doors[0].src = "door-open-loz.png";
    doors[1].src = "door-open-empty.png";
  }
}

// Add an event listener for both doors
doors[0].addEventListener("click", doorReveal);
doors[1].addEventListener("click", doorReveal);
