
const apikey = "70b4bf5e127379d05e6447a46767e213";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");


// Weather function


async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else {
        let data = await response.json();

        console.log(data);

        document.querySelector(".city").textContent = data.name;
        document.querySelector(".temp").textContent = data.main.temp + "°C";
        document.querySelector(".humidity").textContent = data.main.humidity + "%";
        document.querySelector(".wind-speed").textContent = data.wind.speed + "km/h";

        let weather = data.weather[0].main.toLowerCase();

        const weatherIcon = document.querySelector(".weather-icon");
        weatherIcon.setAttribute("src", `images/${weather}.png`);
        weatherIcon.setAttribute("title", weather.charAt(0).toUpperCase() + weather.slice(1));

        document.querySelector(".error").style.display = "none";
        document.querySelector(".weather").style.display = "block";
    }
}


searchButton.addEventListener("click", () => {
    let city = searchBox.value;
    searchBox.value = "";
    checkWeather(city);
})

