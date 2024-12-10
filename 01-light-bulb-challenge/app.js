/*
Learning Objectives:
  1. Understand and utilize DOM element selection.
  2. Implement event listeners on buttons.
  3. Manipulate image attributes dynamically based on user interactions.

Brief:
You're provided with two images of a lightbulb: one turned on and one turned off. Your task is to implement the functionality to control the bulb's illumination. Use the 'Turn On' and 'Turn Off' buttons to switch the src attribute of the image tag, effectively lighting up or dimming the bulb.

Expected Outcomes:
  1. When the "Turn On" button is clicked, the lightbulb image should change to its 'on' state.
  2. When the "Turn Off" button is clicked, the lightbulb image should change to its 'off' state.
  3. The bulb's state should only change when the respective button is clicked.
*/

// Place your plan and solution below!

// Part 1 - Turn On
// 1. Grab Turn on Button
const buttonOn = document.getElementById("turnBulbOn");
// 2. Grab Image lightbulb
const img = document.getElementById("lightbulb");
// 3. Write the function that returns the new src light-bulb-on
function turnLightOn() {
  img.src = "light-bulb-on.png";
}
// 4. Add EventListener for a "click"
buttonOn.addEventListener("click", turnLightOn);

// Part 2 - Turn Off
// 1. Grab Turn Off Button
const buttonOff = document.getElementById("turnBulbOff");
// 2. Write the function that returns the src to light-bulb-off
function turnLightOff() {
  img.src = "light-bulb-off.png";
}
// 3. Add EventListener for a "click"
buttonOff.addEventListener("click", turnLightOff);
