const API_KEY = 'c2b66da4fca11ef5abb471d030e0c8c0';
const coords = 'coords'


const weatherinfo = document.getElementById('winfo')
const weathericon = document.getElementById('wicon')

function init () {
    askForCoords();
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
    
}

function handleSuccess(position) {
    const latitude =  position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordobj = {latitude, longitude};
    getWeather(latitude,longitude);
}

function handleError() {
    console.log(`Cannot access ot location`)
}

function getWeather(lat, lon) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=en`
    fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        const temperture = json.main.temp;
        const place = json.name;
        const weatherDescription = json.weather[0].description;
        const weatherIcon = json.weather[0].icon;
        const iconurl = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;

        weatherinfo.innerHTML = `${temperture}℃ / @${place} / ${weatherDescription}`
        weathericon.setAttribute('src',iconurl)

    })
    .catch((error) => console.log('error',error))
}

init();