import { Pet } from './../js/scripts.js';

$(document).ready(function(){
  let gudetama = new Pet;
  gudetama.name = "Gudetama";
  gudetama.introduction();
  gudetama.checkUp();

  setInterval(() => {
    $("#status").text(gudetama.status);
  }, 1000);

  // if (gudetama.status === "ALIVE"){
  //   $("#status").text("ALIVE")
  // } else {
  //   $("#status").text("DEAD")
  // }

  $("#food-form").submit(function(event){
    event.preventDefault();
    let food = $("#food").val();
    gudetama.feed();
    gudetama.poop();
    $("#feed-display").text("You fed " + gudetama.name + " " + food + "!");
  });

  $("#status-button").click(function(event){
    console.log(gudetama.hungerLevel);
  });
});
