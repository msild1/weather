document.addEventListener("DOMContentLoaded", cityWeather)

function weatherDataFetch(city) {
    let key = "8e7fc1f98df00e5f10dc0e4579b07430"
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
        .then(function(resp){
        return resp.json()
    }) // Convert data to json
        .then(function(data) {
            console.log(data);
            drawWeather(data)
        })
        .catch(function(){
            // catch errors
        })
}

function cityWeather(e){
    weatherDataFetch("Tallinn");
}

function drawWeather(data) {
    var celcius = Math.round(parseFloat(data.main.temp)-273.15);
    var description = data.weather[0].description;

    document.querySelector("#location").innerHTML = data.name;
    document.querySelector("#temp").innerHTML = celcius + "&deg;";
    document.querySelector("#description").innerHTML = description;
}