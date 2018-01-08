import { Pet } from './../js/scripts.js';

$(document).ready(function(){

  $("#display").click(function() {
    console.log("Hey!");
    let gudetama = new Pet;
    console.log(gudetama);
    gudetama.name = "Gudetama";
    gudetama.introduction();
    console.log(gudetama);

    // gudetama.hunger =
  });
});
