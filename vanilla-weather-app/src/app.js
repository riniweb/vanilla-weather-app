function formatDate(timestamp){
    let date = new Date(timestamp);
    let hours = date.getHours();
    if (hours < 10) {
        hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[date.getDay()];
    return `${day} ${hours} : ${minutes}`;
}


function displayTemperature(response){
 
    let temperatureElement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let speedElement = document.querySelector("#speed")
    let dateElement = document.querySelector("#date")
    let iconElement = document.querySelector("#icon")
    temperatureElement.innerHTML = Math.round(response.data.temperature.current);
    cityElement.innerHTML = response.data.city;
   descriptionElement.innerHTML = response.data.condition.description;
   humidityElement.innerHTML = response.data.temperature.humidity;
   speedElement.innerHTML = Math.round(response.data.wind.speed);
   dateElement.innerHTML = formatDate(response.data.time * 1000);
   iconElement.setAttribute("src",`http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png` );  
   iconElement.setAttribute("alt", response.data.condition.description);
}

function search(city){
let apiKey ="f4a7c4a51b002t628840b9bo374f490d";
let apiUrl = `
https://api.shecodes.io/weather/v1/current?query=${city}&key=f4a7c4a51b002t628840b9bo374f490d&units=metric`;  
axios.get(apiUrl).then(displayTemperature)   
}


function handleSubmit(event){
    event.preventDefault();
    let cityInputElement = document.querySelector("#city-input");
    search(cityInputElement.value)
}
 

search("Chicago");

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);



