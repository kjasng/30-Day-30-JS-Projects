const apiKey = "fe081711e7d9e56e1f4214d0e63609c4";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?
units=metric`;
const weatherIcon = document.querySelector(".weather-icon")
const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")

async function checkWeather(city) {
    const reponse = await fetch(apiUrl + `&appid=${apiKey}` + `&q=${searchBox.value}`);
    let data = await reponse.json();
    document.querySelector(".temp").innerHTML = `${Math.round(data.main.temp)}°C`
    document.querySelector(".city").innerHTML = `${data.name}, ${data.sys.country}`
    document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`
    document.querySelector(".wind").innerHTML = `${data.wind.speed} km/h`


    if(data.weather[0].main == "Clouds") {
        weatherIcon.src = "assets/images/clouds.png"
    } else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "assets/images/clear.png"
    }else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "assets/images/rain.png"
    }else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "assets/images/drizzle.png"
    }else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "assets/images/mist.png"
    }

    document.querySelector(".weather").style.display = "block";

}

searchBtn.addEventListener("click", function() {
    checkWeather(searchBox.value);
    searchBox.value = "";
})
