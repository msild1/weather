document.addEventListener("DOMContentLoaded", cityWeather)

function weatherDataFetch(city) {
    let key = "8e7fc1f98df00e5f10dc0e4579b07430"
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
        .then(function(resp){
        return resp.json()
    }) // Convert data to json
        .then(function(data) {
            console.log(data);
        })
        .catch(function(){
            // catch errors
        })
}

function cityWeather(e){
    weatherDataFetch("Tallinn");
}