export function getData(search, arg1, arg2){
  // var apiKey = require('./../.env').apiKey;
  $.ajax({
    url: `http://api.giphy.com/v1/gifs/search?q=gudetama&api_key=BfYSecfMXlpv1i9L4XB4HChFSR8T59jo&limit=5`,
    type: 'GET',
    data: {
      format: 'json'
    },
    success: function(response) {
      console.log("SUCCCESS");
      arg1(response);
    },
    error: function() {
      arg2();
    }
  });
};
