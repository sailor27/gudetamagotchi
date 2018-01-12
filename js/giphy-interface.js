
import { getData } from './../js/scripts.js';

$(document).ready(function() {
  $('#button').click(function() {
    $('#food').val("");
    getData(name, function(response) {
      alert(`SUCCESS - GIPHY`);
      // $('#food-output').append(`<img src="${response.data.url}">`);
    }, function() {
      alert(`ERROR NO GIPHY`);
    //   $('#error-output').text("There was an error processing your request. Please try again.");
    // });
    });
  });
});
