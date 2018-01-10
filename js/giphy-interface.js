var petKey = require('./../.env').petKey;

$(document).ready(function() {
    $.ajax({
      url: `http://api.giphy.com/v1/gifs/search?q=gudetama&api_key=0ec0eb65eca6b7d9c1adb390b453ea7c&limit=5`,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {
        alert(`SUCCESS - GIPHY`);
        // $('gif-zone').
      },
      error: function() {
        alert(`ERROR NO GIPHY`);
      }
    });

});
