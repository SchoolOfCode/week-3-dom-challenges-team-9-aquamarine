/*
Learning Objectives:
  1. Manipulate DOM elements based on user input.
  2. Dynamically create and delete elements based on slider values.
  3. Enhance understanding of event-driven programming.

Brief:
You're provided with a slider (ranging from 1 to 5) and an empty space to populate star icons. Your task is to create or remove stars dynamically based on the value of the slider.

Expected Outcomes:
  1. The number of star icons should match the slider's value.
  2. Adjusting the slider should immediately reflect the change in the number of star icons.
*/

// Place your plan and solution below!

// 1. We need to select the id star-slider and and make a variable
const starSlider = document.getElementById("starSlider");
// 2. grab the id stars and make a variable 
const stars = document.getElementById("stars");
// 3. create function that add the star-icon text content as a child of the id stars 
function toggleStars (){

   

}
// 4. Within the function we need to add 5 conditionals. for example if the slider is value 4 = 4 stars. 

 // if (starSlider.value == "1"){
  //     stars.textContent = "★"
  //  }
  //  else if (starSlider.value == "2"){
  //     stars.textContent = "★★"

  //  }

// 5. create event listener that toggles the amount of stars based on which point the slider is 
starSlider.value.addEventLister("input", toggleStars);

//Other solutions we have seen 

//const sliderNumber = starSlider.value;

//starSlider.textContent = "★" .repeat(slideNumber);