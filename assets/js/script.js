var apiKey = "af182758c9239d5a0f1cab5a0418329b"
var url = "https://api.openweathermap.org/data/2.5/weather?q=Austin&appid=af182758c9239d5a0f1cab5a0418329b&units=imperial"
var tempEl= document.querySelector("#temp")
var iconEl= document.querySelector("#icon")
    
var getWeather = function (url) {
    fetch(url).then(function (response) {
      // request was successful
      if (response.ok) {
        response.json().then(function (data) {
          console.log(data);
          var temp = (data.main.temp)
          tempEl.textContent = temp; 
          $("#wicon").attr("src",`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
          console.log (temp)
          });
    } else {
        alert("There was a problem with your request!");
     }
    });
}
  getWeather(url)