var apiKey = require('./../.env').apiKey;
import { getData } from './../js/scripts.js';
$(document).ready(function() {
  $('#button').click(function() {
    let gif = $('#food').val();
    $('#food').val("");
    getData(name, function(response) {
      $('#food-output').append(`<img src="${response.data.url}">`);
    }, function() {
      $('#error-output').text("There was an error processing your request. Please try again.");
    });
  });
});
