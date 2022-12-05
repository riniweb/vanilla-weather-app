function displayTemperature(response){
   console.log(response);
    let temperatureElement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let speedElement = document.querySelector("#speed")
    temperatureElement.innerHTML = Math.round(response.data.temperature.current);
    cityElement.innerHTML = response.data.city;
   descriptionElement.innerHTML = response.data.condition.description;
   humidityElement.innerHTML = response.data.temperature.humidity;
   speedElement.innerHTML = Math.round(response.data.wind.speed);
}


let apiKey ="f4a7c4a51b002t628840b9bo374f490d";
let apiUrl = `
https://api.shecodes.io/weather/v1/current?query=Chicago&key=f4a7c4a51b002t628840b9bo374f490d&units=metric`;


axios.get(apiUrl).then(displayTemperature)