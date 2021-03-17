//BIKE CODE
//Get the dopdown and save it in dropOne
let dropOne = document.getElementById("dropOne");
let dropTwo = document.getElementById("dropTwo");

//when the the user selects an option from the dropdown
dropOne.addEventListener("change", function() {
  //save the anser of the dropdown in answerOn
  let answerOne = dropOne.options[dropOne.selectedIndex].value;

  if ("yes" == answerOne) {
    //remove the text on the screen that would have appeared if the user selected no earlier
    document.getElementById("message").innerHTML = "";
    //make the next question visable to the user
    let whenYes = document.querySelectorAll(".hidden");
    for (let i = 0; i < whenYes.length; i++) {
      whenYes[i].style.visibility = "visible";
    }
  } else if ("no" == answerOne) {
    //remove the question that would have appeared if the user would have selected yes earlier
    let whenYes = document.querySelectorAll(".hidden");
    for (let i = 0; i < whenYes.length; i++) {
      whenYes[i].style.visibility = "hidden";
    }
    //display message on screen
    document.getElementById("message").innerHTML = "You're missing out!";
  }

});

//listen for change in the secound dropdown
dropTwo.addEventListener("change", function() {

  //depending on what the user ansers i will display different results
  let answerTwo = dropTwo.options[dropTwo.selectedIndex].value;
  if (answerTwo == "everyDay" || answerTwo == "onceAWeek")

  {
    document.getElementById("message").innerHTML = "Biking might be a good choice of transportation for you in the city";
  } else if (answerTwo == "onceAMonth" || answerTwo == "onceINAWhile") {
    document.getElementById("message").innerHTML = "You might wanna choose a different form of transportiation in the city";
  }
});