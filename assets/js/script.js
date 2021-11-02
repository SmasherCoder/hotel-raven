var apiKey = "af182758c9239d5a0f1cab5a0418329b"
var url1 = "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}"
var Storage = JSON.parse(localStorage.getItem("weatherAPI")) || []
$("#Search").on("click", function () {
    var cityname = $("#cityname").val()
    console.log(cityname)
    currentForecast(cityname)
    $("#cityname").val("")
})
function currentForecast(cityname) {
    $.ajax({
        url: `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apiKey}&units=imperial`,
        success: function (apiData) {
            console.log(apiData)
            $("#currentForecast").html(`
    <h2>${cityname}</h2>
    <h3>Temp:${apiData.main.temp}<span><img src="http://openweathermap.org/img/wn/${apiData.weather[0].icon}@2x.png" /></span></h3>
    <h4>Humidity:${apiData.main.humidity}</h4>
    <h5>Wind Speed:${apiData.wind.speed}</h5>
    <h6>Description:${apiData.weather[0].description}</h6>
    `)
            var lat = apiData.coord.lat
            var long = apiData.coord.lon

    $("#SearchForTheCity").on("click",".previous",function(){
            var city = $(this).text()
            currentForecast(city) }