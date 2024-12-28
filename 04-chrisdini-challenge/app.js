/*
Learning Objectives:
  1. Understand and utilize DOM element selection.
  2. Implement mouse event listeners.
  3. Manipulate CSS properties through JavaScript.

Brief:
Chris is eager to perform a magic trick — to vanish before your eyes! By harnessing the power of CSS and JavaScript, make Chris disappear when the mouse hovers over his image. 

Expected Outcomes:
  1. When the user hovers over Chris's image, he should disappear.
  2. When the user moves the mouse away, Chris should reappear.

Hint: You can achieve this in multiple ways e.g. via the opacity or style property, etc. 
*/

// Place your plan and solution below!

// Grab the image of pixel Chris
const img = document.getElementById("chrisImage");
// Listen for a on mouse hover, and trigger a function that will change the image opacity to 0%
function disappear(){
  img.style.opacity = 0;
}
// listen for when the mouse leaves the area, and trigger a function where the img opacity returns to its original state
function reappear(){
  img.style.opacity = 100;
}

img.addEventListener("mouseover", disappear)
img.addEventListener("mouseleave", reappear)
