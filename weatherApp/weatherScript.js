

    //Define variables that will be edited
var $location = $('#location');
var $convertBtn = $('#convert-btn');
var $weatherValue = $('#weatherValue');
var $weatherIcon = $('#weatherIcon');
var $convertContainer = $('#convert-container');


function loadData() {

    //Get location from user
      if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
            // Fetch data from FreeCodeCamp API
        var url = "https://fcc-weather-api.glitch.me//api/current";
        url += '?' + $.param({
          'lon': position.coords.longitude,
          'lat': position.coords.latitude
        });
        $.getJSON(url, function(data) {
          $location.text(data.name + ", " + data.sys.country);
          $weatherValue.text(data.main.temp + " °C");
          $convertContainer.html("<button id='convert-btn'>Change to Fahrenheit</button>");
          $weatherIcon.html("<img src=" + data.weather[0].icon + "alt=" + data.weather[0].description + ">");
          }).fail(function(e) {
              console.log(e);
              $location.text("Sorry...");
          });

          return false;
      });

      return false;

      } else {
      $location.text = "Geolocation is not supported by this browser.";
    };

    return false;
};

function convert() {
  var convertValue = document.getElementsByTagName("BUTTON")[1].textContent;
  var weatherValue = document.getElementsByTagName("H2")[0].textContent;
  var sigFigs = weatherValue.slice(0,-3).replace('.','').length;
  console.log(weatherValue.slice(0,-3).replace('.',''));
  console.log(sigFigs);
  weatherValue = parseFloat(weatherValue.slice(0,-3));


  if (convertValue == "Change to Fahrenheit") {
    $('#convert-btn').text("Change to Celsius");
    weatherValue = (((weatherValue*9)/5)+32);
    console.log(weatherValue);
    $weatherValue.text(weatherValue + " °F");
  } else{
    $('#convert-btn').text("Change to Fahrenheit");
    weatherValue = (((weatherValue - 32)*5)/9).toPrecision(sigFigs);
    console.log(weatherValue);
    $weatherValue.text(weatherValue + " °C");
  }
  return false;
};

document.getElementById("weather-btn").onclick = loadData;
document.getElementById("convert-container").onclick = convert;
