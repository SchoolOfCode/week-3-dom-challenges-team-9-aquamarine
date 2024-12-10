/*
Learning Objectives:
  1. Understand and utilize DOM input events.
  2. Manipulate the style properties of DOM elements.
  3. React to changes in input fields dynamically.

Brief:
You're presented with a canvas and a color picker. Your task is to implement the functionality to change the background color of the canvas based on the color selected in the color picker.

Expected Outcomes:
  1. When a color is selected using the color picker, the canvas should instantly reflect that color.
  2. The canvas should always display the current color selected in the color picker.
*/

// Place your plan and solution below!

// 1. Grab the canvas ID/class and colorPicker
const canvas = document.getElementById("canvas");
const colorPicker = document.getElementById("colorPicker");
// 2. Grab the color value from the colorPicker
const color = document.querySelector("input[type=color]");
console.log(color);
// 3. Make a function that updates the background canvas color to the value from the colorPicker
function updateColor() {
  canvas.style.backgroundColor = colorPicker.value;
}
// 4. Add EventListener that on click of the colorPicker calls the function
colorPicker.addEventListener("input", updateColor);
