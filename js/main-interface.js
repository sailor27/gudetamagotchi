import { Pet } from './../js/scripts.js';

$(document).ready(function(){
  let gudetama = new Pet;
  gudetama.name = "Gudetama";
  gudetama.introduction();
  gudetama.checkUp();

  setInterval(() => {
    $("#status").text(gudetama.status);
    $("#hunger").text("Hunger level: " + gudetama.hungerLevel);
  }, 1000);

  if (gudetama.status === "DEAD"){
    $("#food-display").hide();
  };

  $("#food-form").submit(function(event){
    event.preventDefault();
    let food = $("#food").val();
    gudetama.feed();
    gudetama.poop();
    $("#feed-display").append("<li>" + "You fed " + gudetama.name + " " + food + "!" + "</li>");
  });

});
