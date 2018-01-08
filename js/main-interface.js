import { Pet } from './../js/scripts.js';

$(document).ready(function(){
    let gudetama = new Pet;
    gudetama.name = "Gudetama";
    gudetama.introduction();
    console.log(gudetama.name);

    $("#food-form").submit(function(event){
      event.preventDefault();
      let food = $("#food").val();
      console.log(gudetama.hungerLevel);
      gudetama.feed();
      console.log(gudetama.hungerLevel);
      $("#display").text("You fed " + gudetama.name + " " + food + "!");
    });

});
