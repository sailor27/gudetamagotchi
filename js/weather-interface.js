// var apiKey = require('./../.env').apiKey;
// 
// $(document).ready(function() {
//   $('#weatherLocation').click(function() {
//     let cityName = $(".span").val();
//     let city = $('#location').val();
//     $.ajax({
//       url: `http://api.openweathermap.org/data/2.5/weather?id=${city}&appid=0ec0eb65eca6b7d9c1adb390b453ea7c`,
//       // url: `http://api.openweathermap.org/data/2.5/weather?id=5746545&appid=0ec0eb65eca6b7d9c1adb390b453ea7c`,
//       type: 'GET',
//       data: {
//         format: 'json'
//       },
//       success: function(response) {
//         $('.showHumidity').text(`The humidity in ${cityName} is ${response.main.humidity}%`);
//         $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp}.`);
//       },
//       error: function() {
//         $('#errors').text("There was an error processing your request. Please try again.")
//       }
//     });
//   });
// });
